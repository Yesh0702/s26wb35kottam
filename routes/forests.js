var express = require('express');
var router = express.Router();

/* GET forests page. */
router.get('/', function(req, res, next) {
  res.render('forests', { title: 'Search Results Forests' });
});

module.exports = router;