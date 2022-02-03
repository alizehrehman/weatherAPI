const axios = require("axios");
const API_KEY = process.env.API_KEY;

let getWeatherData = (zipcode) => {
    try {
        axios.get('')
    }
    catch(error) {
        console.log(error);
        //TODO: error handling
    }
}

module.exports = getWeatherData;