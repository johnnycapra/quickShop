var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var cams = [
  {
    id: 1,
    title: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 4,
    price: 369.99,
    onSale: true,
    inCart: false
  }, {
    id: 2,
    title: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2,
    price: 1099.0,
    onSale: false,
    inCart: true
  }, {
    id: 3,
    title: 'Nikon D810A',
    image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 3,
    price: 3796.95,
    onSale: true,
    inCart: false
  }
]

let newId = 4;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cameras', function(req, res) {
  res.json(cams)
});

router.post('/cameras', function (req, res) {
  req.body.id = newId;
  newId++;
  cams.push(req.body)
  res.json(cams);
})

router.patch('/cameras/:id', function (req, res) {
  let desiredCamera = cams.filter(cam => cam.id != req.body.id)
  cams = desiredCamera;
  cams.push(req.body)
  console.log('cams', cams);
  res.json(cams);
})

router.delete('/cameras/:id', function(req, res) {
  let newList = cams.filter(cam => cam.id != req.params.id);
  cams = newList;
  res.send(cams);
})

router.get('/cart', function(req, res) {
  let inCartCams = cams.filter(cam => cam.inCart)
  res.send(inCartCams);
})

router.patch('/cart/:id/add', function(req, res) {
  cams = cams.map(cam => {
    if(cam.id == req.params.id) cam.inCart = true;
    return cam;
  })
  res.json(cams);
})

router.patch('/cart/:id/remove', function(req, res) {
  cams = cams.map(cam => {
    if(cam.id == req.params.id) cam.inCart = false;
    return cam;
  })
  res.json(cams);
})

module.exports = router;
