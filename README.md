# Sobre o projeto

Este projeto foi desenvolvido para o processo seletivo da empresa View Software House, e consiste em um bate papo em tempo real.

## Explicação do uso do projeto

O objetivo da aplicação é fazer um chat em tempo real, mostrando os usuário que entram e saem do chat, assim como as mensagens enviadas, considerando quem enviou, a mensagem que foi enviada e data/hora em que foi enviada.

## Iniciando a aplicação

As instruções abaixo vão lhe permitir obter uma cópia do projeto e rodar a aplicação localmente.

### Pré-requisitos

Para rodar a aplicação, você precisa ter o Node.js instalado na sua máquina.

### Instalação

Para acessar o projeto, basta clonar o repositório ou realizar o download dos arquivos do projeto.

É necessário rodar o front-end e o back-end ao mesmo tempo para a aplicação funcionar corretamente.

Assim sendo, siga os passos seguintes em dois terminais diferentes depois de clonar o repositório.

### Front-end

Acesse a pasta `client` do projeto e instale as dependências utilizando o seguinte comando no seu terminal:

```sh
npm install
```

Após instalar as dependências, utilize o seguinte comando no seu terminal para iniciar a aplicação:

```sh
npm run dev
```

Com isso, o front-end estará rodando, em seguida suba o back-end.

### Back-end

Acesse a pasta `server` do projeto e instale as dependências utilizando o seguinte comando no seu terminal:

```sh
npm install
```

Após instalar as dependências, utilize o seguinte comando no seu terminal para iniciar a aplicação:

```sh
npm run dev
```

Com isso, a aplicação estará rodando. Basta acessar <code>http://localhost:5173</code> em seu navegador. Lembre-se de abrir duas guias diferentes com o mesmo endereço, e entrar com usuários diferentes para testar as funcionalidades.

## Tecnologias utilizadas

<b>Front-end:</b>

- <b>ReactJS:</b> Biblioteca de JavaScript para construção de interfaces.
- <b>TypeScript:</b> Superset de JavaScript que adiciona tipagem estática ao código.
- <b>Vite:</b> Build tool para aplicações web.
- <b>Styled-components:</b> Biblioteca para estilização de componentes.
- <b>React-toastify:</b> Biblioteca de componente de notificação.
- <b>Socket.io-client:</b> Biblioteca bidirecional para comunicação cliente-servidor.

<b>Back-end:</b>

- <b>Node.js:</b> Ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador.
- <b>Express:</b> Framework para Node.js que fornece recursos mínimos para construção de servidores web.
- <b>Socket.io:</b> Biblioteca bidirecional para comunicação cliente-servidor.
- <b>Nodemon:</b> Biblioteca que reinicia automaticamente o servidor sempre que alterações nos arquivos da aplicação forem detectadas (dependência de desenvolvimento).
