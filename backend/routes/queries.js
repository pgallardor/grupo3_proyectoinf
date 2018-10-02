const express = require('express');
let router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res) {
  res.send("wena we funka");
});

router.get('/opciones/:casino/', function (req, res) {
  let tipos = [], cnt = 0;
  knex('lleva as l')
    .join('agregado as a', 'a.id', 'l.id_agregado')
    .join('casino as c', 'c.id', 'l.id_casino')
    .join('menu as m', 'm.id', 'l.id_menu')
    .join('plato as p', 'p.id', 'l.id_plato')
    .distinct('p.nombre', 'c.nombre', 'm.tipo')
    .select(['p.nombre as nombre_plato', 'm.tipo', 'c.nombre', 'l.fecha_publicacion', 'l.id_plato'])
    .where('c.id', '=', req.params.casino)
    .orderBy('l.fecha_publicacion', 'asc')
    .then(function (response) {
      let parsed_response = [];
      for (let i = 0; i < response.length; i++){
        const idx = tipos.indexOf(response[i].tipo);
        if (idx === -1){
          tipos.push(response[i].tipo);
          parsed_response[cnt] = {};
          parsed_response[cnt].tipo = response[i].tipo;
          parsed_response[cnt].menus = [{
            id_plato: response[i].id_plato,
            plato: response[i].nombre_plato,
            fecha: response[i].fecha_publicacion
          }];
          cnt++;
        }
        else{
          parsed_response[idx].menus.push({
            id_plato: response[i].id_plato,
            plato: response[i].nombre_plato,
            fecha: response[i].fecha_publicacion
          });
        }
      }
      res.json({parsed_response, casino: response[0].nombre});
    })
});

router.get('/casinos/:id_tipo', function (req, res) {
  let casinos = [], cnt = 0;
  knex('lleva as l')
    .join('agregado as a', 'a.id', 'l.id_agregado')
    .join('casino as c', 'c.id', 'l.id_casino')
    .join('menu as m', 'm.id', 'l.id_menu')
    .join('plato as p', 'p.id', 'l.id_plato')
    .distinct('p.nombre', 'c.nombre', 'm.tipo')
    .select(['p .nombre as nombre_plato', 'm.tipo', 'c.nombre', 'l.fecha_publicacion', 'l.id_plato','c.id as id_casino'])
    .where('m.id', '=', req.params.id_tipo)
    .orderBy('l.fecha_publicacion', 'asc')
    .then(function (response) {
      let parsed_response = [];
      for (let i = 0; i < response.length; i++){
        const idx = casinos.indexOf(response[i].nombre);
        const idx2 = casinos.indexOf(response[i].id_casino);
        if (idx === -1){
          casinos.push(response[i].nombre);
          parsed_response[cnt] = {};
          parsed_response[cnt].nombre = response[i].nombre;
          parsed_response[cnt].id_casino = response[i].id_casino;
          parsed_response[cnt].menus = [{
            id_plato: response[i].id_plato,
            plato: response[i].nombre_plato,
            fecha: response[i].fecha_publicacion
          }];
          cnt++;
        }
        else{
          parsed_response[idx].menus.push({
            id_plato: response[i].id_plato,
            plato: response[i].nombre_plato,
            fecha: response[i].fecha_publicacion
          });
        }
      }
      res.json({parsed_response, menu: response[0].tipo});
    })
})

router.get('/num-menus/', function (req, res) {
  knex.raw('select casino.id, casino.nombre, count (distinct lleva.id_plato) ' +
    'from menu, casino, ofrece, lleva ' +
    'where ofrece.id_menu = menu.id and ' +
    'casino.id = ofrece.id_casino and ' +
    'lleva.id_menu = ofrece.id_menu and ' +
    'lleva.id_casino = casino.id ' +
    'group by (casino.id, casino.nombre)')
    .then(function (response) {
      res.json(response.rows);
    })
})

router.get('/num-tipos', function (req, res) {
  knex.raw('select menu.id, menu.tipo, count (distinct lleva.id_plato) ' +
    'from menu, casino, ofrece, lleva ' +
    'where ofrece.id_menu = menu.id and ' +
    'casino.id = ofrece.id_casino and ' +
    'lleva.id_menu = ofrece.id_menu and ' +
    'lleva.id_casino = casino.id ' +
    'group by (menu.id, menu.tipo)')
    .then(function (response) {
      res.json(response.rows);
    })
})


router.get('/detalle/:casino/:menu/:plato', function (req, res) {

  knex('lleva as l').join('plato as p', 'p.id', 'l.id_plato')
    .join('agregado as a', 'a.id', 'l.id_agregado')
    .join('casino as c', 'c.id', 'l.id_casino')
    .join('menu as m', 'm.id', 'l.id_menu')
    .orderBy(['c.nombre', 'p.nombre', 'l.precio'], 'asc')
    .where({
      id_casino: req.params.casino,
      id_plato: req.params.plato,
      tipo: req.params.menu
    })
    .select(['p.nombre as nombre_plato', 'c.nombre as nombre_casino', 'a.tipo_agregado', 'm.tipo', 'l.precio'])
    .then(function (response) {
      res.json(response);
    })
})

router.get('/nombre-casino/:casino', function (req,res){
  knex('casino as c').select(['c.nombre'])
    .where({
      id : req.params.casino
    })
    .then(function (response) {
      res.json(response);
  })
})

router.get('/nombre-menu/:menu', function (req,res){
  knex('menu as m').select(['m.tipo'])
    .where({
      id : req.params.menu
    })
    .then(function (response) {
      res.json(response);
    })
})

router.get('/nombre-plato/:plato', function (req,res){
  knex('plato as p').select(['p.nombre'])
    .where({
      id : req.params.plato
    })
    .then(function (response) {
      res.json(response);
    })
})


router.get('/nutricion-plato/:plato', function (req,res){
  let info = [];
  knex('plato as p').join('info_nutricional as i', 'p.id_informacion', 'i.id')
    .select(['p.nombre','i.kcal','i.proteinas','i.carbohidratos', 'i.grasas', 'i.alergenos'])
    .where('p.id', '=', req.params.plato)
    .then(function (response) {
      let parsed_response = [];
      const idx = info.indexOf(response[0].kcal);
      if (idx === -1){
        parsed_response[0] = {};
        parsed_response[0].tipo = 'Kcal';
        parsed_response[0].value = response[0].kcal;
        parsed_response[1] = {};
        parsed_response[1].tipo = 'Proteinas';
        parsed_response[1].value = response[0].proteinas;
        parsed_response[2] = {};
        parsed_response[2].tipo = 'Carbohidratos';
        parsed_response[2].value = response[0].carbohidratos;
        parsed_response[3] = {};
        parsed_response[3].tipo = 'Grasas';
        parsed_response[3].value = response[0].grasas;
        parsed_response[4] = {};
        parsed_response[4].tipo = 'Alérgenos';
        parsed_response[4].value = response[0].alergenos;
      }
      res.json({parsed_response, nombre_plato : response[0].nombre});
    })

})




router.get('/test1', function (req, res) {
  knex('plato').select().then(function (response) {
    res.json(response);
  })
})

module.exports = router;
