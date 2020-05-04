const axios = require('axios');

const locationInstance = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/'
});

const weatherInstance = axios.create({
    baseURL: 'https://api.darksky.net/'
});

module.exports = {
    axiosLocation: locationInstance,
    axiosWeather: weatherInstance
};