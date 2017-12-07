const querystring = require('querystring')

const request = require('request');

const express = require('express')

const bodyParser = require('body-parser');

const app = express()

const port = 3000;

var client_id = 'd8c9612369ca4e99b0e3fb17245cea09';

var client_secret = '5c8ef1a7fab5482bb1da2a52d4b71042';

var redirect_url = 'http://localhost:8888/callback/'

app.use(require('express').static('public'));

app.get('/', (req, response) => {
    response.render('index.ejs');
  })
  
var tooken;

 app.get('/getToken', (req, response) => {
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };
  
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      var token = body.access_token;
      tooken = token;
      console.log(tooken);
      var options = {
        url: 'https://api.spotify.com/v1/users/jmperezperez',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log(body);
      });
    }
  });
  console.log(tooken);
  response.send({'access_token': tooken});
  })

  app.get('/callback', (req, response) => {
    var code = req.query.code || null;
    console.log("code" + code);
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;
    var stateKey = 'spotify_auth_state';

    response.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_url,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
  
        access_token = body.access_token;
        refresh_token = body.refresh_token;
  
     //   console.log(access_token);
     //   console.log(refresh_token);

          var options = {
            url: 'https://api.spotify.com/v1/me',
            headers: { 'Authorization': 'Bearer ' + access_token },
            json: true
          };
  
          // use the access token to access the Spotify Web API
          request.get(options, function(error, response, body) {
            console.log(body);
          });

        }
    })

})

console.log('listening on 3000')
app.listen(port);
