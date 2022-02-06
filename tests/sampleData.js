let wrongShapeRawData1 = {
    "coord": {
        "lon": -121.9226,
        "lat": 37.7166
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            //"description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 282.7,
        "feels_like": 282.24,
        "temp_min": 280.23,
        "temp_max": 285.95,
        "pressure": 1024,
        "humidity": 65
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.54,
        "deg": 80
    },
    "clouds": {
        "all": 0
    },
    "dt": 1643947677,
    "sys": {
        "type": 2,
        "id": 2016191,
        "country": "US",
        "sunrise": 1643900986,
        "sunset": 1643938395
    },
    "timezone": -28800,
    "id": 0,
    "name": "Dublin",
    "cod": 200
}
let wrongShapeRawData2 = {
    "coord": {
        "lon": -121.9226,
        "lat": 37.7166
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    // "main": {
    //     "temp": 282.7,
    //     "feels_like": 282.24,
    //     "temp_min": 280.23,
    //     "temp_max": 285.95,
    //     "pressure": 1024,
    //     "humidity": 65
    // },
    "visibility": 10000,
    "wind": {
        "speed": 1.54,
        "deg": 80
    },
    "clouds": {
        "all": 0
    },
    "dt": 1643947677,
    "sys": {
        "type": 2,
        "id": 2016191,
        "country": "US",
        "sunrise": 1643900986,
        "sunset": 1643938395
    },
    "timezone": -28800,
    "id": 0,
    "name": "Dublin",
    "cod": 200
}
let wrongShapeRawData3 = {
    "coord": {
        "lon": -121.9226,
        "lat": 37.7166
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 282.7,
        "feels_like": 282.24,
        "temp_min": 280.23,
        "temp_max": 285.95,
        "pressure": 1024,
        "humidity": 65
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.54,
        "deg": 80
    },
    "clouds": {
        "all": 0
    },
    "dt": 1643947677,
    "sys": {
        "type": 2,
        "id": 2016191,
        "country": "US",
        "sunrise": 1643900986,
        "sunset": 1643938395
    },
    "timezone": -28800,
    "id": 0,
    //"name": "Dublin",
    "cod": 200
}
module.exports = {
    wrongShapeRawData1,
    wrongShapeRawData2,
    wrongShapeRawData3
}