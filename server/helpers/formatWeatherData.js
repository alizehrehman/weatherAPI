let formatWeatherData = (rawData) => {
    
    let formattedData = {
        city: rawData.name,
        conditions: rawData.weather[0].description,
        high_temp: rawData.main.temp_max,
        low_temp: rawData.main.temp_min
    }
    return formattedData;
}

module.exports = {formatWeatherData};