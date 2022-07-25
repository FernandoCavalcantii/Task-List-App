### Bem vindo(a) ao repositório do Task List App!

Projeto desenvolvido durante a Blitz da Trybe, com o intuito de criar um organizador de tarefas utilizando banco de dados, Back-end e Front-end.


<details>
<summary><strong>Descrição</strong></summary><br />

Projeto desenvolvido durante a Blitz da Trybe. A aplicação trata-se de um gerenciador de tarefas, onde o usuário pode dar um nome, uma descrição e escolher o status ("Done", "In progress" e "Stopped") para a tarefa. É composto por duas telas, a página de Login e a página das tarefas. A aplicação foi desenvolvida desde o início, fazendo a conexão entre um banco de dados, Back-end e Front-end.

Existem usuários comuns e administradores, existindo as funcionalides:

- De usuários: como criar administrador (com validação para apenas administradores criarem novos admins), criar usuário comun, login, ler, atualizar, deletar usuário(s). Algumas destas funcionalidades passam por autenticação de token.

- Funcionalidades de tarefas: criar, ler, atualizar e deletar tarefa(s).

</details>

<details>
<summary><strong>Tecnologias Utilizadas</strong></summary><br />

- MySQL.
- Docker.
- JavaScript.
- TypeScript.
- Express.
- Sequelize.
- JWT.
- Mocha.
- Chai.
- Sinon.
- Reacy. 
- HTML/CSS.

</details>

<details>
  <summary><strong>Como iniciar o aplicativo</strong></summary><br />

  1. Clone o repositório.

  - `git clone git@github.com:FernandoCavalcantii/Task-List-App.git`
  
  2. Entre na pasta clonada.
  
  - `cd Task-List-App`
  
  3. Execute o docker-compose.yml.
  
  - `docker-compose-up`

  4. Instale as dependências.

  - `cd frontend npm install`
  - `cd ../backend`
  - `npm install`
  
  5. Iniciar.
  
  - `npm run dev`
  - `cd ../frontend`
  - `npm start`

</details>

<details>
<summary><strong>Status do progresso</strong></summary>

O projeto não foi ainda totalmente finalizado. O banco de dados e o Back-end estão prontos (os testes do back estão parcialmente feitos), faltando finalizar parte do Front-end e testes.

</details>

<details>
<summary><strong>Considerações</strong></summary>

Apesar de o projeto não estar concluído, ao desenvolver-lo, me senti bastante satisfeito com meu progresso na área de desenvolvimento, sendo capaz de elaborar um aplicativo que conecta banco de dados, Front-end e Back-end.

</details>
