const axios = require('axios');
const { formatWeatherData } = require('./formatWeatherData.js');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

let getWeatherData = (zipcode) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${API_KEY}`)
        //TODO: add ability to include country code if not in US?
        .then(rawData => {
            return formatWeatherData(rawData.data);
        })
        .then(formattedData => {
            return formattedData;
        })
        .catch(error => {
            throw error;
        })
    
}

module.exports = {getWeatherData};