const request = require("request");
const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=ef3f2f813cd65c9ecdbea913c93387bc&query=' + encodeURIComponent(address)

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services.', undefined)
            return
        } else if(body.error) {
            callback('Unable to find location. Try another search.', undefined)
            return
        }
        let data = {
            latitude: body.data[0].latitude,
            longitude: body.data[0].longitude,
            location: body.data[0].locality
        };
        callback(undefined, data)
    })
}

module.exports = geocode