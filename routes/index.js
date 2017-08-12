var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var createUser = function (request, response) {
    var data = request.body|| {};
    var aplanadora = new Product(data);
    console.log(aplanadora);
    //Ejecutar el metodo CASE para agrefar Product al nombre del producto
    aplanadora.case(function(err, name) {
        if (err) throw err;
        console.log('product name :'+ name);
    });
    // Guardar en la base de datos
    aplanadora.save(function(err) {
        if (err) throw err;
        console.log('Product saved successfully!');
    });
    response.redirect('/products/all');
};


module.exports = router;
