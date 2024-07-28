import React, { useState } from 'react';
import * as io from 'socket.io-client';

import { Container } from './styles';

// Interface para tipagem de componentes
interface LoginProps {
  setChatVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  setSocket: React.Dispatch<React.SetStateAction<io.Socket | null>>;
}

const Login: React.FC<LoginProps> = ({ setChatVisibility, setSocket }) => {
  // Constante utilizada
  const [inputValue, setInputValue] = useState<string>('');

  // Função que pega as mudanças no input do nome do usuário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Função de envio do nome do usuário, chamada no submit do fomulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue?.trim()) return;
    const socket = await io.connect('http://localhost:3001');
    socket.emit('set_username', inputValue);

    setSocket(socket);
    setChatVisibility(true);
  };

  return (
    <Container>
      <h1>Entrar no chat</h1>

      {/* Formulaŕio para enviar o nome do usuário, contém o input e o botão */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='Nome de usuário'
          name='username'
          id='username'
          value={inputValue}
          onChange={handleChange}
        />

        <button className='glow-on-hover' type='submit'>
          Entrar
        </button>
      </form>
    </Container>
  );
};

export default Login;
