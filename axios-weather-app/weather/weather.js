const axios = require('../axios/axios');

var getWeather = (apiKey, lat, lng) => {

    var url = `/forecast/${apiKey}/${lat},${lng}`;

    return axios.axiosWeather.get(url).then((response) => {
        let weather = {
            temperature: response.data.currently.temperature,
            apparentTemperature: response.data.currently.apparentTemperature,
            temperatureInCelcius: ((response.data.currently.temperature - 32)/1.8000).toFixed(2),
            apparentTemperatureInCelcius: ((response.data.currently.apparentTemperature -32)/1.8000).toFixed(2)
        }
        let successResponse = {
            data: weather,
            status: 'success'
        }
        return successResponse;
    }).catch(error => {
        let e = null;
        if(error.message === "Request failed with status code 400"){
            e = `Unable to process the request sent by the client due to invalid syntax.`;
        } else if (error.message === 'Request failed with status code 403') {
            e = `Unable to process the request sent by the client due to not have proper authorization to access to the requested content.`;
        } else if (error.message === 'Request failed with status code 404' || error.code === 'ENOTFOUND') {
            e = `Unable to connect to Forecast.io server.`;
        } else {
            e = error.message;
        }
        let errorResponse = {
            message: e,
            status: 'fail'
        };
        return errorResponse;
    });
    
};

module.exports.getWeather = getWeather;