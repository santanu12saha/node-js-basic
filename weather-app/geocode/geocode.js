const request = require('request');

var geocodeAddress = (apiKey, address, callback) => {
    var encodedAddress = encodeURIComponent(address)

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`,
        json: true
    }, (error, response, body) => {
        //console.log(JSON.stringify(response, undefined, 2));
        if(error !== null && error.code === 'ENOTFOUND'){
            callback(`Unable to connect to Google servers.`);
        }else if (body.status === 'REQUEST_DENIED') {
            callback(body.error_message);
        } 
        else if (body.status === 'ZERO_RESULTS'){
            callback(`Unable to find that address.`);
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;