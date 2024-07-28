import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px;

  h1 {
    margin-top: 0;
  }

  /* formulário de entrada do nome do usuário */
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    margin-bottom: 30px;

    font-size: 20px;
  }

  /* estlização do input */
  input {
    font-size: 1.2rem;
    margin: 0 auto;
    padding: 1.2rem;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    border: none;
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
    width: auto;
  }

  /* estilização do botão - estilo pronto, pego na internet */
  .glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #171e23;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 5px;
    font-size: 20px;
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
