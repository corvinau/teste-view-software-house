const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: 'http://localhost:5173' },
});

// Difinição da porta que a aplicação do backend vai rodar
const PORT = 3001;

io.on('connection', (socket) => {
  console.log('Usuário conectado!', socket.id);

  socket.on('set_username', (username) => {
    socket.data.username = username;

    io.emit('set_username', {
      user: socket.data.username,
    });
  });

  socket.on('message', (textMessage) => {
    const date = new Date().toLocaleString();

    io.emit('receive_message', {
      userId: socket.id,
      user: socket.data.username,
      textMessage,
      date,
    });
  });

  socket.on('disconnect', (_reason, username) => {
    socket.data.username = username;

    io.emit('user_disconnect', {
      user: socket.data.username,
    });

    console.log('Usuário desconectado!', socket.id);
  });
});

server.listen(PORT, () => console.log('Servidor rodando...'));
