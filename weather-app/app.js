const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=0d6d50d1e062fcd2c4edb39dc2be692f&query=37.8267,-122.4233&units='
const geocodeURL = 'http://api.positionstack.com/v1/forward?access_key=ef3f2f813cd65c9ecdbea913c93387bc&query=Los%20Angeles'

request({url: url, json: true}, (error, response) => {
    if(error) {
        console.log('Unable to connect')
        return
    } else if(response.body.error) {
        console.log('unable to find location')
        return;
    }
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out but it feels like ' + response.body.current.feelslike + ' degrees out')
})


request({url: geocodeURL, json: true}, (error, response) => {
    if(error) {
        console.log('Unable to connect')
        return
    } else if(response.body.error) {
        console.log('unable to find location')
        return;
    }
    console.log(response.body.data[0].latitude)
    console.log(response.body.data[0].longitude)
})
