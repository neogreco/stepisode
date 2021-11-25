var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(500).json({
    message: 'Not Available. If you want to try the api call you can do a get call to /simpsons or /how-i-met-your-mother',
    error: err
});
});

module.exports = router;
