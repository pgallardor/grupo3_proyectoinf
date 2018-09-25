var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jonadb', function (req, res) {
    knex('encargado').select()
        .then(function (resp) {
            res.json(resp);
        })
})

module.exports = router;
