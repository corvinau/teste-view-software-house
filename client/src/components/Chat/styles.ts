import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;

  background-color: #7aa1a0;

  border-radius: 8px;
  padding: 30px;
  height: 680px;
  width: 630px;

  box-shadow: rgba(122, 161, 160, 0.5) 0px 5px 15px;

  /* div referente a listagem das mensagens, ativa a barra de rolagem se for necessário */
  .messages {
    overflow-y: auto;
    margin-bottom: 20px;
  }

  /* estilização da barra de rolagem */
  .messages::-webkit-scrollbar {
    width: 3px;
  }

  .messages::-webkit-scrollbar-track {
    background-color: #7aa1a0;
    padding: 3px;
    border-radius: 50px;
  }
  
  .messages::-webkit-scrollbar-thumb {
    background-color: #171e23;
    border-radius: 50px;
  }

  /* visualiazação da mensagem enviada */
  .message{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #567477;
    border-radius: 8px;
    margin: 0px 1px 10px 0px;
    padding: 10px;
  }

  .message-user{
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
  }

  .message-text{
    margin-bottom: 5px;
  }

  .message-date{
    font-size: 14px;
  }

  /* formulário de entrada da mensagem */
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-size: 20px;
  }

  /* estlização do input */
  input {
    font-size: 1rem;
    margin: 0 auto;
    padding: 0.8rem;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    border: none;
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
    width: 100%;
    margin-right: 10px;
  }

  /* estilização do botão - estilo pronto, pego na internet */
  .glow-on-hover {
    width: 80px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #171e23;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 5px;
  }

  .glow-on-hover:before {
      content: '';
      background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
      position: absolute;
      top: -2px;
      left:-2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing 20s linear infinite;
      opacity: 0;
      transition: opacity .3s ease-in-out;
      border-radius: 10px;
  }

  .glow-on-hover:hover:before {
      opacity: 1;
  }

  .glow-on-hover:after {
      z-index: -1;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #111;
      left: 0;
      top: 0;
      border-radius: 10px;
  }

  @keyframes glowing {
      0% { background-position: 0 0; }
      50% { background-position: 400% 0; }
      100% { background-position: 0 0; }
  }
`;
