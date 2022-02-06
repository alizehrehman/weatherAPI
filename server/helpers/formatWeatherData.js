let formatWeatherData = (rawData) => {
    
    let formattedData = {
        city: rawData.name ? rawData.name : 'n/a',
        conditions: rawData.weather && rawData.weather[0].description ? rawData.weather[0].description : 'n/a',
        high_temp: rawData.main && rawData.main.temp_max ? rawData.main.temp_max : 'n/a',
        low_temp: rawData.main && rawData.main.temp_min ? rawData.main.temp_min : 'n/a'
    }
    return formattedData;
}

module.exports = {formatWeatherData};