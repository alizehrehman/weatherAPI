const express = require('express');
const app = express();
const port = 3000;
const formatWeatherData = require('./helpers/formatWeatherData.js');
const { getWeatherData } = require('./helpers/getWeatherData.js');

app.get('/', (req, res) => {
    res.send('Welcome to the weatherAPI service.');
})

app.get('/local/:zipcode', (req, res) => {
    let rawData = getWeatherData(req.params.zipcode);
    let formattedData = formatWeatherData(rawData);
    res.send(formattedData);
})

app.listen(port, () => {
    console.log(`weatherAPI listening on port ${port}`);
})