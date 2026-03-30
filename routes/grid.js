var express = require('express');
var router = express.Router();

/* GET grid page. */
router.get('/', function(req, res, next) {
  let query = req.query; // Step 7: Get the query object
  
  // Step 8: Log to console and render
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  
  res.render('grid', { title: 'Grid Display', query: query });
});

module.exports = router;
