# weatherAPI

A backend service that provides current weather data.

## Description

weatherAPI accepts a valid US zip-code and returns a JSON response with the high and low temperature for the day, the current conditions, and the city name.

## Getting Started

### Dependencies

The weatherAPI relies primarily on:
* Express
* Axios
* Babel
* Jest

### Installing

For Local Development in MacOS:
* From the root directory, install the following:

1. Download the Github repo:

```
git clone https://github.com/alizehrehman/weatherAPI.git
```

2. Download NVM:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
3. Install packages:
```
npm install
```
4. Create ```.env``` file. See the Environment Variables section below.

### Executing program

* To run locally using MacOS:

1. Start server (running on port 3000):
```
npm start
```
2. Go to http://localhost:3000/ in your browser and check it out! To make requests, use http://localhost:3000/local/:zipcode in the browser or a tool like Postman.

Note: make sure you create a ```.env``` file at the project's root directory with your API_KEY (see below for more info).

## Environment Variables

I used a ```.env``` file to save sensitive variables that are used by our application to make API calls. To use our source code without making modifications, make a copy of the ```.env.example``` file and rename it ```.env```.

Create an account at https://openweathermap.org/. You can access your API key under your account by clicking ```API keys```. Copy this API key into your ```.env``` file.

## Testing

* To run test locally using MacOS, run ```npm test```.

## Created By
Alizeh Rehman
