const express = require('express');
const app = express();
const port = 3000;
const { getWeatherData } = require('./helpers/getWeatherData.js');

app.get('/', (req, res) => {
    res.send('Welcome to the weatherAPI service.');
})

app.get('/local/:zipcode', (req, res) => {

    getWeatherData(req.params.zipcode)
        .then(formattedData => {
            res.send(formattedData);
        })
        .catch(error => {
            res.status(400).send(error.message);
        })
})

app.listen(port, () => {
    console.log(`weatherAPI listening on port ${port}`);
})