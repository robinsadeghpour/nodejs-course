const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=0d6d50d1e062fcd2c4edb39dc2be692f&query=45,75'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', () => {
    console.log('An error', error)
})

request.end()