import socketio from 'socket.io-client';

const socket = socketio('http://10.0.0.100:3333', {
  autoConnect: false,
});

function subcribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  }
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subcribeToNewDevs
}