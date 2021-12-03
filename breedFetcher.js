const request = require('request');


const breedName = process.argv[2];


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, responce, body) => { 
        

    if (error) {
      callback(error, null);
      return;      
    }    
    
    let data = JSON.parse(body);
    
    if (error || data.length < 1) {
      callback("Breed wasn't found!");
    } else {
      callback(null, data[0].description);
    }
  });

};


module.exports = { fetchBreedDescription };


 