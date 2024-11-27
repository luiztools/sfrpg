var express = require('express');
var router = express.Router();
const fs = require("fs");
const path = require("path");

router.get('/sf', function(req, res, next) {
  const files = fs.readdirSync(path.resolve(__dirname, "..", "public", "audios", "sf"));
  console.log(files);
  res.render('sfmusic', { title: 'Express', files });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('music', { title: 'Express' });
});

module.exports = router;
