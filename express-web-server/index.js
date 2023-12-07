// basic express js application
// log every request method and path to the console

// on request to root path to the server send back a response with a message "Hello Express!"
// on request to /about path to the server send back a response with a message "About Page"
// on request to /home path to the server send back a response with a message "Home Page"
// on request to the route that does not exist send back a response with a message "404 Page Not Found"

// start the server and listen on port 3000

const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.get('*', (req, res) => {
    res.send('404 Page Not Found');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
