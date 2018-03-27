// https://github.com/heroku/node-js-getting-started/blob/master/index.js
// const express = require('express');
// const path = require('path');
// const PORT = process.env.PORT || 5000;

// express()
//     .use(express.static(__dirname))
//     .set('views', path.join(__dirname, 'build'))
//     .set('view engine', 'ejs')
//     .engine('html', require('ejs').renderFile)
//     .get('/', (req, res) => res.render('index.html'))
//     .listen(PORT, () => console.log(`Listening on ${ PORT }`));

var express = require('express'); //https://github.com/heroku/node-js-getting-started/blob/master/index.js
// var cors = require('cors');

var app = express();

app.set('port', (process.env.PORT || 5000)); //gets port from environment or else defaults to 5000

// app.use(cors()); //enable all CORS requests
app.use(express.static(__dirname + '/build')); //read files from this folder

app.get('/', function(req, res) { //request, response
  res.render('index.html');
});

// app.get('*', function (req, res) { // This wildcard method (catch-all) handles all other requests - keep on bottom
//   res.redirect('/');
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});