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

geocode.geocodeAddress(process.env.googlekey ,argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(process.env.forecastKey, results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's currently (${weatherResults.temperature} in Fahrenheit) and (${weatherResults.temperatureInCelcius} in Celsius). It feels like (${weatherResults.apparentTemperature} in Fahrenheit) and (${weatherResults.apparentTemperatureInCelcius} in Celsius).`);
            }
        });
    }
});





