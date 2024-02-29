// a simple express server
// log each request method and path to the console when accessed
// on request to '/about' send "About Page"
// on request to '/contact' send "Contact Page"
// listen on port 3000

const express = require('express');
const app = express();
const path = require('path');

// create a middleware to log the request
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

// when GET request is made to root path, respond with "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// listen on Port 3000
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});