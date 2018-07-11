const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home pages. */
console.log(__rootpath)
// pug test
router.get('/pug-test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// react
router.get('/react', function(req, res, next) {
  res.sendFile(path.resolve(__rootpath, 'react/build/index.html'));
});

// angular
// router.get('/angular', function(req, res, next) {
//   res.sendFile(path.resolve(__rootpath, 'xxx'));
// });

module.exports = router;
