const request = require('request');

var getWeather = (apiKey, lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
        json: true
    },(error, response, body) => {
        if(error){
            callback(`Unable to connect to Forecast.io server.`)
        } else if(response.statusCode === 400) {
            callback(`Unable to fetch weather (${response.body.error}).`)
        } else if(response.statusCode === 403) {
            callback(`Unable to connect to Forecast.io server (${response.body.error}).`);
        } else {
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                temperatureInCelcius: ((body.currently.temperature - 32)/1.8000).toFixed(2),
                apparentTemperatureInCelcius: ((body.currently.apparentTemperature -32)/1.8000).toFixed(2) 
            });
        }
    });
};

module.exports.getWeather = getWeather;

