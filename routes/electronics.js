var express = require('express');
var router = express.Router();

/* GET electronics search results page. */
router.get('/', function(req, res, next) {
  // Step 7: Modify it to render the correct pug (electronics)
  // and change the title to “Search Results Electronics”
  res.render('electronics', { title: 'Search Results Electronics' });
});

module.exports = router;