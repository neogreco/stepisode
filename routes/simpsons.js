var express = require('express');
var router = express.Router();

var episodesPerSeason={ 1:13,2:22,3:24,4:22,5:22,6:25,7:25,8:25,9:25,10:23,11:22,12:21,13:22,14:22,15:22,16:21,17:22,18:22,19:20,20:21,21:23,22:22,23:22,24:22,25:22,26:22,27:22,28:22,29:21,30:23,31:22,32:22}


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var maxSeasons = Object.keys(episodesPerSeason).length
  var server = "https://simpsonizados.me/capitulo/los-simpson-"
  var season = Math.floor(Math.random() * maxSeasons) + 1
  var maxEpisodes = episodesPerSeason[season]
  var episode = Math.floor(Math.random() * maxEpisodes) + 1
  var fullURL=server+season+'x'+episode
  
  if (Object.keys(req.query).length === 0){
    res.json(fullURL);
  }else{
    res.redirect(fullURL)    
  }
});

module.exports = router;
