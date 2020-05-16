var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize);
    res.render('shop/index', {
      title: 'MY FRUIT',
      products: productChunks
    });
  });
});
router.get('/user/signup', function (req, res, next) {
  res.render('user/signup', {
    csrfToken: req.csrfToken()
  });
})

module.get('/user/signup', function (req, res, next) {
  res.render('/user/signup', {
    csrfToken: req.csrfToken()
  });
});

module.post('/user/signup', function (req, res, next) {
  res.redirect('/');
});

module.exports = router;