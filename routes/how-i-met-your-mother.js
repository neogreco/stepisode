var express = require('express');
var router = express.Router();

var episodesPerSeason={ 1:22,2:22,3:20,4:24,5:24,6:24,7:24,8:24,9:24 }


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var maxSeasons = Object.keys(episodesPerSeason).length
  var server = "https://cuevana3.io/episodio/como-conoci-a-tu-madre-"
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
