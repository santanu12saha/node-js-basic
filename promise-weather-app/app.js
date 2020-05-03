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

geocode.geocodeAddress(process.env.googlekey ,argv.address).then((results) => {
    console.log(results.address);
    return weather.getWeather(process.env.forecastKey, results.latitude, results.longitude);
}).then((weatherResults) => {
    console.log(`It's currently (${weatherResults.temperature} in Fahrenheit) and (${weatherResults.temperatureInCelcius} in Celsius). It feels like (${weatherResults.apparentTemperature} in Fahrenheit) and (${weatherResults.apparentTemperatureInCelcius} in Celsius).`);
}).catch((errorMessage) => {
    console.log(errorMessage);
});
