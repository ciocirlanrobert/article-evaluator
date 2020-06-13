const dotenv = require("dotenv");
dotenv.config();

var path = require('path');
const express = require('express');
const aylien = require("aylien_textapi");
const bodyParser = require("body-parser");

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));


app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

app.post('/test', async (req, res, next) => {
    try {
      var data = textapi.sentiment({
        'text': req.body.theText
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
      });
    } catch(error) {
      return next(error)
    }
  });

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});