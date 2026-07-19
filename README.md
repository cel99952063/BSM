BookStore Manager CLI (BSM)
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

## Sugestão para o arquivo .env ##
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
📝 Testando o Sistema
Para realizar uma avaliação completa:

Cadastros: Utilize o menu principal para cadastrar pelo menos um Autor, um Livro e um Cliente.

Operações: Realize um empréstimo vinculando o livro ao cliente.

Relatórios: Acesse o Módulo de Relatórios no menu principal. O sistema oferece 5 opções para verificação dos dados, cobrindo o acervo, empréstimos ativos e histórico.



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

👥 Desenvolvedor
Gerson Machado