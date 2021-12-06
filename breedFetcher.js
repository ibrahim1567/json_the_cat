const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    if (!err) {
      const result = JSON.parse(body);

      if (result.length === 0) {
        return callback('error: Failed to find breed', null);
      } else {
        return callback(err, result[0].description);
      }
    } else {
      return callback(err, 'Something is wrong!');
    }
  });
};

module.exports = { fetchBreedDescription }; 