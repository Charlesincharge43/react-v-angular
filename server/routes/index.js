const express = require('express');
const router = express.Router();

/* GET home pages. */

// pug test
router.get('/pug-test', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
