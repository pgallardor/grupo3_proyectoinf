const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/menus/:casino', (req, res) =>{
  let tipos = [], cnt = 0;
  knex('lleva as l')
    .join('agregado as a', 'a.id', 'l.id_agregado')
    .join('casino as c', 'c.id', 'l.id_casino')
    .join('menu as m', 'm.id', 'l.id_menu')
    .join('plato as p', 'p.id', 'l.id_plato')
    .distinct('p.nombre', 'c.nombre', 'm.tipo')
    .select(['p.nombre as nombre_plato', 'm.tipo', 'c.nombre', 'l.fecha_publicacion as fecha', 'l.id_plato'])
    .where('c.id', '=', req.params.casino)
    .then((response) => {
        var allMenus = [];
        for (let i = 0; i < response.length; i++){
            const {tipo, id_plato, nombre_plato, fecha} = response[i];
            let idx = tipos.indexOf(tipo);
            if (idx === -1){
                tipos = [...tipos, tipo];
                allMenus[cnt] = {
                  tipo,
                  menu: [{id_plato, nombre_plato, fecha}]
                };
                cnt++;
            }
            else
              allMenus[idx].menu = [...allMenus[idx].menu, {id_plato, nombre_plato, fecha}];

        }
        res.json({allMenus, nombre_casino: response[0].nombre});
    })
});

router.post('/comment', (req, res) => {
  let fecha = new Date();
  knex('comentario').insert({
    texto: req.body.comentario,
    correo: req.body.correo,
    fecha: fecha.toDateString()
  }).returning(['id']).then(response => {
      res.status(200).send('Success!');
  }).catch( err => {
      console.log(err);
      res.status(500);
  })
})

module.exports = router;
