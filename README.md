# BookStore Manager CLI (BSM) #
Este projeto consiste em um sistema de gerenciamento de biblioteca desenvolvido para facilitar o controle de acervo e empréstimos, com foco em modularidade, persistência de dados e relatórios gerenciais. 



🚀 Tecnologias Utilizadas
Linguagem: TypeScript

Banco de Dados: PostgreSQL

Arquitetura: MVC (Model-View-Controller) com Service Layer

Gerenciamento de Dependências: NPM

🛠️ Funcionalidades Principais
Gestão de Acervo: Cadastro e consulta de livros e autores.

Controle de Empréstimos: Registro de saídas e devoluções.

Módulo de Relatórios: Geração de 5 relatórios para análise de acervo, clientes e empréstimos.

⚙️ Como Instalar e Rodar
1. Pré-requisitos
Node.js instalado na máquina.

PostgreSQL configurado e rodando.

2. Configuração do Banco de Dados
No seu terminal do banco de dados, execute o script de criação das tabelas presente no arquivo database/schema.sql:

## Exemplo de arquivo .env ##
DB_USER=postgres
DB_PASSWORD=1010
DB_HOST=localhost
DB_PORT=5432
DB_NAME=bookstore_db


3. Instalação e Execução
Bash
# Clone o repositório
git clone <https://github.com/cel99952063/BSM.git>

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev

# 📝 Testando o Sistema
Para realizar uma avaliação completa:

Cadastros: Utilize o menu principal para cadastrar pelo menos um Autor, um Livro e um Cliente.

Operações: Realize um empréstimo vinculando o livro ao cliente.
           Realize uma devolução de livro.

Relatórios: Acesse o Módulo de Relatórios no menu principal. O sistema oferece 5 opções para verificação dos dados, cobrindo o acervo, empréstimos ativos e histórico.

# Exemplos de utilização
*Rotina para cadastro de Autor*
1. Com o sistema aberto veremos o MenuPrincipal
Digite opção 1;

====== BookStore Manager CLI ======
1. Gerenciar Autores
2. Gerenciar Livros
3. Gerenciar Clientes
4. Gerenciar Empréstimos
5. Relatórios
0. Encerrar aplicação
===================================
Escolha uma opcao: 

Opção 1 inserida veremos o Menu de Autores
====== Menu de Autores ======
1. Listar Autores
2. Cadastrar Autor
3. Atualizar Autor
4. Remover Autor
5. Voltar
Escolha uma opcao: 

Opção 2 inserida veremos o campo 'Nome do autor'.
Após preenchimento pressione a tecla Enter.
Será exibido o campo 'Nacionalidade'.
Após preenchimento pressione a tecla Enter e, se os campos forem validados,
receberemos a mensagem '✅ Autor cadastrado com sucesso! ID: <ID autor> - <nome autor>'


*Rotina para cadastro de Livro*
1. Com o sistema aberto veremos o MenuPrincipal
Digite opção 2;

====== BookStore Manager CLI ======
1. Gerenciar Autores
2. Gerenciar Livros
3. Gerenciar Clientes
4. Gerenciar Empréstimos
5. Relatórios
0. Encerrar aplicação
===================================
Escolha uma opcao: 

Opção 2 inserida veremos o Menu de Livros

====== Menu de Livros ======
1. Listar Livros
2. Cadastrar Livro
3. Atualizar Livro (Completo)
4. Atualizar Estoque (Apenas Quantidade)
5. Remover Livro
6. Voltar
Escolha uma opcao: 

Opção 2 inserida veremos o campo 'Título do livro'.
Após preenchimento pressione a tecla Enter.
Será exibido o campo 'Ano de publicacao'.
Após preenchimento pressione a tecla Enter.
Será exibido o campo 'ID do autor'.
Após preenchimento pressione a tecla Enter.
Será exibido o campo 'Quantidade disponível'.
Após preenchimento pressione a tecla Enter e, se os campos forem validados,
receberemos a mensagem '✅ Livro cadastrado com sucesso! ID: <ID livro> - <nome livro>'


*Rotina para cadastro de Cliente*
1. Com o sistema aberto veremos o MenuPrincipal
Digite opção 3;

====== BookStore Manager CLI ======
1. Gerenciar Autores
2. Gerenciar Livros
3. Gerenciar Clientes
4. Gerenciar Empréstimos
5. Relatórios
0. Encerrar aplicação
===================================
Escolha uma opcao: 

Opção 3 inserida veremos o Menu de Clientes
====== Menu de Clientes ======
1. Listar Clientes
2. Cadastrar Cliente
3. Atualizar Cliente
4. Remover Cliente
5. Voltar
Escolha uma opcao: 

Opção 2 inserida veremos o campo 'Nome'.
Após preenchimento pressione a tecla Enter.
Será exibido o campo 'E-mail'.
Após preenchimento pressione a tecla Enter.
Será exibido o campo 'CPF'.
Após preenchimento pressione a tecla Enter.
Será exibido o campo 'Telefone (opcional)'.
Após preenchimento pressione a tecla Enter e, se os campos forem validados,
receberemos a mensagem '✅ Cliente cadastrado com sucesso! <ID cliente> - <nome cliente>'


*Rotina para realizar Empréstimo*
1. Com o sistema aberto veremos o MenuPrincipal
Digite opção 4;

====== BookStore Manager CLI ======
1. Gerenciar Autores
2. Gerenciar Livros
3. Gerenciar Clientes
4. Gerenciar Empréstimos
5. Relatórios
0. Encerrar aplicação
===================================
Escolha uma opcao: 

Opção 4 inserida veremos o Menu de Empréstimos
====== Menu de Empréstimos ======
1. Listar Empréstimos
2. Registrar Empréstimo
3. Registrar Devolução
4. Voltar
Escolha uma opcao: 

Opção 2 inserida veremos o campo 'Registrar Empréstimo'.
Após preenchimento pressione a tecla Enter.
Será exibido o campo 'ID do livro'.
Após preenchimento pressione a tecla Enter.
Será exibido o campo 'ID do cliente'.
Após preenchimento pressione a tecla Enter e, se os campos forem validados,
receberemos a mensagem '✅ Empréstimo registrado com sucesso! <ID empréstimo>'


*Rotina para realizar Devolução*
1. Com o sistema aberto veremos o MenuPrincipal
Digite opção 4;

====== BookStore Manager CLI ======
1. Gerenciar Autores
2. Gerenciar Livros
3. Gerenciar Clientes
4. Gerenciar Empréstimos
5. Relatórios
0. Encerrar aplicação
===================================
Escolha uma opcao: 

Opção 4 inserida veremos o Menu de Empréstimos
====== Menu de Empréstimos ======
1. Listar Empréstimos
2. Registrar Empréstimo
3. Registrar Devolução
4. Voltar
Escolha uma opcao: 

Opção 3 inserida veremos o campo 'ID do empréstimo:'.
Após preenchimento pressione a tecla Enter.
Será exibido o campo 'ID do livro'.
Após preenchimento pressione a tecla Enter e, se os campos forem validados,
receberemos a mensagem '✅ Devolução registrada com sucesso.'




# Estrutura de pastas
BSM/
├── src/
│   ├── Controllers/
│   │   ├── AutorController.ts
│   │   ├── ClienteController.ts
│   │   ├── EmprestimoController.ts
│   │   ├── LivroController.ts
│   │   └── RelatorioController.ts
│   ├── Database/
│   │   ├── connection.ts
│   │   └── schema.sql
│   ├── Menus/
│   │   └── MenuPrincipal.ts
│   ├── Models/
│   │   ├── Autor.ts
│   │   ├── Cliente.ts
│   │   ├── Emprestimo.ts
│   │   └── Livro.ts
│   ├── Repositories/
│   │   ├── AutorRepository.ts
│   │   ├── ClienteRepository.ts
│   │   ├── EmprestimoRepository.ts
│   │   ├── LivroRepository.ts
│   │   └── RelatorioRepository.ts
│   ├── Services/
│   │   ├── AutorService.ts
│   │   ├── ClienteService.ts
│   │   ├── EmprestimoService.ts
│   │   ├── LivroService.ts
│   │   └── RelatorioService.ts
│   └── main.ts
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json



Link Repositório: https://github.com/cel99952063/BSM.git
Link Kanban: https://trello.com/b/Apch72wh/projetofinalmodulo1

(Projeto desenvolvido como parte da formação técnica do 'SCTEC - Desenvolvedor Back-End [Node js]', aplicando conceitos de persistência, arquitetura em camadas e SQL.)

# 👥Aluno/Desenvolvedor # 
  Gerson Machado === JS