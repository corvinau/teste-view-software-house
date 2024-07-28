import React, { useState, useEffect, useRef } from 'react';
import * as io from 'socket.io-client';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styles';

// Interfaces para tipagem de componentes e constantes
interface ChatProps {
  socket: io.Socket | null;
}

interface IMessageProps {
  user: string;
  textMessage: string;
  date: string;
}

interface IUserProps {
  user: string;
}

const Chat: React.FC<ChatProps> = ({ socket }) => {
  // Constantes utilizadas
  const [inputValue, setInputValue] = useState<string>('');
  const [userName, setUserName] = useState<IUserProps>();
  const [action, setAction] = useState<string>();
  const [messageList, setMessageList] = useState<IMessageProps[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bottomRef = useRef<any>(null);

  // Função que pega as mudanças no input da mensagem
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    e.target.focus();
  };

  // Função que renderiza as mensagens e notificações na tela caso tenha alguma
  // alteração nas suas dependências
  useEffect(() => {
    // Pega o nome de usuário que foi digitado para acessar a aplicação
    socket?.on('set_username', (data: IUserProps) => {
      setUserName(data);
      setAction('set_username');
    });

    // Pega o nome do usuário que se desconectou da aplicação
    socket?.on('user_disconnect', () => {
      setUserName(userName);
      setAction('user_disconnect');
    });

    // Pega as mensagens enviadas pelos usuários conetados
    socket?.on('receive_message', (data: IMessageProps) => {
      setMessageList((current) => [...current, data]);
    });

    // Mostra a notificação de usuário conectado baseado na ação setada
    if (action === 'set_username') {
      toast(`${userName?.user}` + ' entrou');
    }

    // Mostra a notificação de usuário desconectado baseado na ação setada
    if (action === 'user_disconnect') {
      toast(`${userName?.user}` + ' saiu');
    }

    // Não escuta o socket caso não tenha nenhuma interação de envio de mensagem
    return () => {
      socket?.off('receive_message');
    };
  }, [action, socket, userName]);

  // Função para rolar as mensagens para o final de acordo com a atualização do array
  useEffect(() => {
    scrollDown();
  }, [messageList]);

  // Função de envio da mensagem, chamada no submit do fomulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue?.trim()) return;

    socket?.emit('message', inputValue);
    setInputValue('');
  };

  // Função com a referência para onde tem que rolar
  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      {/* Div que comporta a lista de mensagens e ativa a barra de rolagem se necessário */}
      <div className='messages'>
        {/*
          Listagem das mensagens enviadas, contendo o usuário que enviou, a
          mensagem enviada e data e hora que foi enviada
        */}
        {messageList.map((item) => {
          return (
            <div key={crypto.randomUUID()} className='message'>
              <div className='message-user'>{item.user}</div>
              <div className='message-text'>{item.textMessage}</div>
              <div className='message-date'>({item.date})</div>
            </div>
          );
        })}
        {/*
          Div criada para servir de âncora para a rolagem da página de acordo
          com os envios novas mensagens
        */}
        <div ref={bottomRef} />
      </div>

      {/* Formulaŕio para enviar a mensagem, contém o input e o botão */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='Digite sua mensagem...'
          name='message'
          id='message'
          value={inputValue}
          onChange={handleChange}
        />
        <button className='glow-on-hover' type='submit'>
          Enviar
        </button>
      </form>

      {/*
        Componente de notificação de entrada/saída de usuário.
        Utilizado o estilo padrão do componente
      */}
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </Container>
  );
};

export default Chat;
