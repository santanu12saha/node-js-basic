const request = require('request');

var getWeather = (apiKey, lat, lng) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
            json: true
        },(error, response, body) => {
            if(error){
                reject(`Unable to connect to Forecast.io server.`)
            } else if(response.statusCode === 400) {
                reject(`Unable to fetch weather (${response.body.error}).`)
            } else if(response.statusCode === 403) {
                reject(`Unable to connect to Forecast.io server (${response.body.error}).`);
            } else {
                var weatherData =  {
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature,
                    temperatureInCelcius: ((body.currently.temperature - 32)/1.8000).toFixed(2),
                    apparentTemperatureInCelcius: ((body.currently.apparentTemperature -32)/1.8000).toFixed(2) 
                };
                resolve(weatherData);
            }
        });
    });
};

module.exports.getWeather = getWeather;

