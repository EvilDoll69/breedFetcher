const request = require('request');


const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, responce, body) => {
  let data = JSON.parse(body);
  // console.log(typeof(data));
  if (error) {
    console.log("This URL does not exist");
  } else if (data.length < 1) {
    console.log("Breed wasn't found!");
  } else if (breed) {
    console.log(data[0].description);
  }
});


 