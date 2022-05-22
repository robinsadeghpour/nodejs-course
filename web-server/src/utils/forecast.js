const request = require("request");

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0d6d50d1e062fcd2c4edb39dc2be692f&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)


    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback(undefined, 'Unable to connect')
            return
        } else if(body.error) {
            callback(undefined, 'unable to find location')
            return;
        }
        callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out but it feels like ' + body.current.feelslike + ' degrees out')
    })
}

module.exports = forecast