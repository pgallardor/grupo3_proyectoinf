var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jonadb', function (req, res) {
    let table = [], names = [], cnt = 0;
    knex('casino_udec.ofrece as o').join('casino_udec.casino as c', 'c.id', 'o.id_casino')
      .join('casino_udec.menu as m', 'm.id', 'o.id_menu')
      .select(['nombre', 'tipo'])
        .then(function (resp) {
            console.log(resp.length);

            for (let i = 0; i < resp.length; i++){
              //console.log(table);
              let idx = names.indexOf(resp[i].nombre);
              if (idx === -1){
                names.push(resp[i].nombre);
                table[cnt] = {};
                table[cnt].nombre = resp[i].nombre;
                table[cnt].tipo_menu = [resp[i].tipo];
                cnt++;
              }
              else
                table[idx].tipo_menu.push(resp[i].tipo);
            }
        })
      .then(function () {
        //console.log(table);
        res.json(table);
      })
})

module.exports = router;
