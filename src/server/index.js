const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors');
var path = require('path')
const mockAPIResponse = require('./mockAPI.js');
const fetch = require('node-fetch');
const { response } = require('express');

// Initiate app 
const app = express()

// Set the port of the server
let port = 8081;
app.listen(port, function () {
    console.log('Project app is listening on port 8081!')
})

// Configure the app to use cors and body barser
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('dist'))

// create the route of the home page
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// Create route to check if the app is working
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Create route to send URL from user to server
app.post('/url', async (req, res) => {
    // Build the URL to fetch the API 
    var BASE_API_URL = "https://api.meaningcloud.com/sentiment-2.1";
    var FETCH_URL = `${BASE_API_URL}?key=${process.env.API_KEY}&url=${req.body.input}&lang=en`;

    // fetch the API amd send the response
    fetch(FETCH_URL)  
    .then((res) => res.json())
    .then(function(response){res.send(response)})
});

