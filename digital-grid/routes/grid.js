var express = require('express');
var router = express.Router();
const fs = require("fs");

router.get('/hex', function(req, res, next) {
  res.render('hexes', { title: 'Express' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('grid', { title: 'Express' });
});

router.post("/", (req, res, next) => {
  const map = req.body;
  
});

module.exports = router;
