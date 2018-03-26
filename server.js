// https://github.com/heroku/node-js-getting-started/blob/master/index.js
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
    .use(express.static(__dirname))
    .set('views', path.join(__dirname, 'build'))
    .engine('html', require('ejs').renderFile)
    .get('*', (req, res) => res.render('index.html'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));