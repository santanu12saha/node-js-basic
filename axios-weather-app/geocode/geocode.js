const axios = require('../axios/axios');

var geocodeAddress = (apiKey, address) => {
    var encodedAddress = encodeURIComponent(address)
    url = `/geocode/json?address=${encodedAddress}&key=${apiKey}`;
    return axios.axiosLocation.get(url).then((response) => {
        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error(`Unable to find that address.`);
        } else if (response.data.status === 'REQUEST_DENIED') {
            throw new Error(response.data.error_message);
        } else {
            let location = {
                address: response.data.results[0].formatted_address,
                latitude: response.data.results[0].geometry.location.lat,
                longitude: response.data.results[0].geometry.location.lng
            };
            let successResponse = {
                data: location,
                status: 'success'
            }
            return successResponse;
        }
    }).catch((error) => {
        let e = null;
        if(error.message === 'Request failed with status code 404' || error.code === 'ENOTFOUND'){
            e = `Unable to connect to Google servers.`;
        }else {
            e = error.message;
        }
        let errorResponse = {
            message: e,
            status: 'fail'
        };
        return errorResponse;
    });
};

module.exports.geocodeAddress = geocodeAddress;