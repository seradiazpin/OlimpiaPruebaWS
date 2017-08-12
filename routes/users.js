var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

var User = require('../database/schemas/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var users = [];
    User.find({}, function(err, pro) {
        if (err) {
            res.send('Error in database');
        }else {
            res.send(pro);
        }
    });

});
var createUser = function (request, response) {
    var data = request.body|| {};
    var user = new User;
    user.data = data;

    // Guardar en la base de datos
    aplanadora.save(function(err) {
        if (err) {
            console.log('Error database');
        }else {
            console.log('Product saved successfully!');
        }

    });
    response.redirect('/users');
};
router.post('/new',jsonParser,createUser);


module.exports = router;
