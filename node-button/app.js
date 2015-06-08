var Gpio = require('onoff').Gpio;
var led = new Gpio(27, 'out');
var button = new Gpio(5, 'in', 'both');
var express = require('express');
var app = express();
var gstate = 0;

app.use(express.static('public'));

app.get('/api/on', function (req, res) {
  gstate = gstate === 0 ? 1 : 0;
  led.writeSync(gstate);
  res.send(gstate === 0 ? 'on' : 'off');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


function exit() {
  led.unexport();
  button.unexport();
  process.exit();
}

button.watch(function (err, value) {
  if (err) {
    throw err;
  }

  led.writeSync(value);
});

process.on('SIGINT', exit);
