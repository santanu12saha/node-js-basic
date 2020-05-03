const request = require('request');

var geocodeAddress = (apiKey, address) => {
    var encodedAddress = encodeURIComponent(address);

    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`,
            json: true
        }, (error, response, body) => {
            if(error){
                reject(`Unable to connect to Google servers.`);
            }else if (body.status === 'REQUEST_DENIED') {
                reject(body.error_message);
            } 
            else if (body.status === 'ZERO_RESULTS'){
                reject(`Unable to find that address.`);
            } else if (body.status === 'OK') {
                var locationData = {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                };
                resolve(locationData);
            }
        });
    });
};

module.exports.geocodeAddress = geocodeAddress;