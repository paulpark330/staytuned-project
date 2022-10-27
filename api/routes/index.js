const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('is this working?');
  res.render('index', { title: 'Express' });
});

module.exports = router;
