const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public');
const options = {
    extensions: ['html']
}

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath, options))

app.get('/weather', (req, res) => {
    res.send({forecast: 'forecast', location: 'location'})
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})