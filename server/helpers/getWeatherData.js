const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

let getWeatherData = (zipcode) => {
    axios.get(`api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${API_KEY}`)
        //TODO: add ability to include country code if not in US?
        .then(rawData => {
            return rawData;
        })
        .catch(error => {
            console.log(error);
            // TODO: handle error handling
        })
    
}

module.exports = {getWeatherData};