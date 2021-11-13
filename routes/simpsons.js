var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var maxSeasons = 32
  var maxEpisodes = 24
  var server = "https://simpsonizados.me/capitulo/los-simpson-"
  var season = Math.floor(Math.random() * maxSeasons) + 1
  var episode = Math.floor(Math.random() * maxEpisodes) + 1
  res.send('<a href='+server+season+'x'+episode+'>Ver Episodio</a>');
});

module.exports = router;
