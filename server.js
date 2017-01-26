var express = require('express');
var app = express();
var path = require('path');
app.set('port', (process.env.PORT || 5000));



app.set('trust proxy', 'loopback');
app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, './')
  });
});

// any other routes:
app.all('/*', function(req, res, next) {
  res.sendFile('index.html', {
    root: path.join(__dirname, './')
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
