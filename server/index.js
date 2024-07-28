const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: 'http://localhost:5173' },
});

// Difinição da porta que a aplicação do backend vai rodar
const PORT = 3001;

// Escuta a conexão do socket com o frontend
io.on('connection', (socket) => {
  console.log('Usuário conectado!', socket.id);

  // Recebe o nome do usuário que foi enviado
  socket.on('set_username', (username) => {
    socket.data.username = username;

    // Emite o nome do usuário para o frontend utilizar
    io.emit('set_username', {
      user: socket.data.username,
    });
  });

  // Recebe a mensagem que foi enviada
  socket.on('message', (textMessage) => {
    // Definine a data atual e já faz a formatação desejada
    const date = new Date().toLocaleString();

    // Emite a mensagem, o usuário e a data/hora da mensagem para o frontend
    io.emit('receive_message', {
      userId: socket.id,
      user: socket.data.username,
      textMessage,
      date,
    });
  });

  // Recebe a notificação que algum usuário se desconectou
  socket.on('disconnect', (_reason, username) => {
    socket.data.username = username;

    // Emite o nome do usuário desconectado para o frontend
    io.emit('user_disconnect', {
      user: socket.data.username,
    });

    console.log('Usuário desconectado!', socket.id);
  });
});

// Escuta o servidor na porta definida e mostra no console se o servidor está rodando
server.listen(PORT, () => console.log('Servidor rodando...'));
