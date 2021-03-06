'use strict';

const express = require('express');
const http = require('http'); //may be use later
const multer = require('multer');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const https = require('https');
const fs = require('fs');
const mockup = require('./mockup-tracking');
const trackingListenMain = require('./tracking-bus.js');

var port = process.env.PORT || 4000;

// const options = {
//     key: fs.readFileSync('./certificate/server.key'),
//     cert: fs.readFileSync('./certificate/server.crt'),
//     requestCert: false,
//     rejectUnauthorized: false
// };

// Get config for node environment
// Check `nodemon.json` for details
// const ENV = process.env;

// const CONFIG = {
// 	PORT: ENV.PORT
// }
// const CONFIGHTTP = {
// 	PORT: 80
// }

const app = express();
// const appHTTP = express();

// Create socketIO and wrap app server inside
const server = http.Server(app);
// const serverHTTP = http.createServer(app);
// serverHTTP.listen(4001);

// const server = https.createServer(options, app);
// const serverHTTP = http.createServer(app);


// appHTTP.use(bodyParser.urlencoded({ extended: false }));
// appHTTP.use(bodyParser.json());
// appHTTP.use('*', (req, res) => {  
//     res.redirect('https://' + req.headers.host + req.url);

//     // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
//     // res.redirect('https://example.com' + req.url);
// });
const io = socketIO(server);


// Add middleware to handle post request for express
const form = multer();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static('static'));

// Serve index.html for path '/', this is home path
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
    // res.redirect('https://' + req.headers.host + req.url+':40000');
});
app.get('/bus-tracking/a1', (req, res) => {
    res.sendFile('a1.html', { root: __dirname + '/bus-tracking/' });
});
app.get('/bus-tracking/a2', (req, res) => {
    res.sendFile('a2.html', { root: __dirname + '/bus-tracking/' });
});


server.listen(port, () => {
    console.log('ServerHTTPS is running at port: ' + port);
});
// serverHTTP.listen(80, () => {
// 	console.log('ServerHTTP is running at port: 80');
// });


io.on('connection', socket => {
    socket.emit('connectSuccess', { content: 'You have connected.' });
});

// Run fake tracking location
// mockup.run(io);
// mockup.runR2(io);

//driver tracking
const busInterface = require('./bus.interface')
busInterface({ busName: 'A1' }, (data) => {
    trackingListenMain.busBroadcast(io, data, 'A1')
})
trackingListenMain.runA1(io);
trackingListenMain.runA2(io);




