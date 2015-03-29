var ws = require('nodejs-websocket');

require('tesselate')(['relay-mono'], function(tessel, m) {
  console.log('turning on relay 1');
  m.relay.turnOn(1);

  var connection = ws.connect('ws://10.0.0.24:1337', function() {
    connection.sendText('Tessel Up');
  });

  connection.on('text', function(text) {
    m.relay[text](1);
  });
});
