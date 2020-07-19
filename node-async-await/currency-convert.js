//USD CAD 23 CANADIAN EQUIVALENT OF 23 USD DOLLAR
//23 USD is worth 28 CAD. You can spend these in the following countries:

const axios = require('axios');

const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${from}`);
        const rate = response.data.rates[to];
        if(rate) {
            return rate;
        }else {
            throw new Error();
        }
    } catch (e) {
        throw new Error(`Unable to get exchange rate for ${from} and ${to}`);
    }
};

const getCountries = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country) => country.name);
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}.`)
    }
};

//Old Promise Example
const convertCurrency = (from, to, amount) => {
    let countries;
    return getCountries(to).then((tempCountries) => {
        countries = tempCountries;
        return getExchangeRate(from, to);
    }).then((rate) => {
        const exchangeAmount = amount * rate;
        return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
    });
};

convertCurrency('INR', 'EUR', 45).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e);
});

// create convertCurrencyAlt as async function
// Get Countries and rate using await and our two function
// Calculate exchangeAmount
// Return status string

//Async and Await Example
const convertCurrencyAlt = async (from, to, amount) => {
    const countries = await getCountries(to);
    const exchangeRate = await getExchangeRate(from, to);
    const exchangeAmount = amount * exchangeRate; 
    return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
};

convertCurrencyAlt('USD', 'INR', 45).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e.message);
});


// getExchangeRate('USD', 'INR').then((rate) => {
//     console.log(rate); 
// });

// getCountries('INR').then((countries) => {
//     console.log(countries);
// });