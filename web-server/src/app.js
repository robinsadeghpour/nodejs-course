const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

const options = {
    extensions: ['html']
}

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Static directory to serve
app.use(express.static(publicDirectoryPath, options))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text'
    })
})

app.get('/weather', (req, res) => {
    res.send({forecast: 'forecast', location: 'location'})
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})