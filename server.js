var express = require('express'); // https://github.com/heroku/node-js-getting-started/blob/master/index.js
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000)); // gets port from environment or else defaults to 5000

app.use(express.static(path.join(__dirname, 'build'))); // read files from this folder

app.get('/', function(req, res) { // request, response
  res.render('index.html');
});

// app.get('*', function (req, res) { // This wildcard method (catch-all) handles all other requests - keep on bottom
//   res.redirect('/');
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});