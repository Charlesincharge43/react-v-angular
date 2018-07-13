const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home pages. */
console.log(__rootpath)
// pug test
router.get('/pug-test', function(req, res) {
  res.render('index', { title: 'Express' });
});

// react
router.get('/react', function(req, res) {
  res.sendFile(path.resolve(__rootpath, 'react/build/index.html'));
});

// angular
router.get('/angular', function(req, res) {
  res.sendFile(path.resolve(__rootpath, 'angular/src/index.html'));
});

module.exports = router;
