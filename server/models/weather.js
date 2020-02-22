const request = require('request-promise');

const API_KEY = 'fb84b94dca07e43a92e86adc3742312e';

class Weather {
    static retrieveByCity(city, callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true
        }).then(function(res){
            callback(res); //link b/w express backend and data result being returned from our API request
        }).catch(function (err){
            console.log(err);
            callback({error: 'Could not reach OpenWeatherMap API'})
        });
    }
}

module.exports = Weather; 
