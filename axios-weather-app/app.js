const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);

geocode.geocodeAddress(process.env.googlekey, argv.address).then(response => {
    if(response.status === 'fail'){
        throw new Error(response.message);
    }else{
        console.log(response.data.address);
        return weather.getWeather(process.env.forecastKey, response.data.latitude, response.data.longitude);
    }
}).then(response => {
    if(response.status === 'fail'){
        throw new Error(response.message);
    }else {
        console.log(`It's currently (${response.data.temperature} in Fahrenheit) and (${response.data.temperatureInCelcius} in Celsius). It feels like (${response.data.apparentTemperature} in Fahrenheit) and (${response.data.apparentTemperatureInCelcius} in Celsius).`);
    }
}).catch(error => {
    console.log(error.message);
});