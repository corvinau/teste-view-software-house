import { useState } from 'react';
import * as io from 'socket.io-client';

import './App.css';

import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';

function App() {
  const [chatVisibility, setChatVisibility] = useState<boolean>(false);
  const [socket, setSocket] = useState<io.Socket | null>(null);

  return (
    <>
      {/*
        Verificação ternária para visualização dos componentes.
        O mais correto seria utilizar o react router, definir rotas para cada
        componente e tudo mais, mas como é uma aplicação pequena utilizei a
        verificação ternária e a passagem de argumentos para o funcionamento.
      */}
      {chatVisibility ? (
        <Chat socket={socket} />
      ) : (
        <div className='login-area'>
          <img src='public/icone.png' alt='Ícone da aplicação' />
          <Login setChatVisibility={setChatVisibility} setSocket={setSocket} />
        </div>
      )}
    </>
  );
}

export default App;
