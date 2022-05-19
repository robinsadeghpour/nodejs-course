const request = require('request')
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const { argv } = require('node:process');


const address = argv[2]
if(!address) {
    return console.log('Please provide an address')
}

geocode(address, (error, {latitude, longitude, location} = {}) => {
    if(error) {
        return console.log(error)
    }
    forecast(longitude, longitude, (error, forecastData) => {
        if(error) {
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
    })
})