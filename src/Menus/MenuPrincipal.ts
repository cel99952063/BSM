

import * as readline from 'readline-sync'; //biblioteca para ouvir o terminal
import { AutorController } from '../Controllers/AutorController';
import { LivroController } from '../Controllers/LivroController';
import { ClienteController } from '../Controllers/ClienteController';
import { EmprestimoController } from '../Controllers/EmprestimoController';
// import { RelatorioController } from '../Controllers/RelatorioController'; // TEM QUE CRIAR !!!

export class MenuPrincipal {
    
    private autorController = new AutorController();
    private livroController = new LivroController();
    private clienteController = new ClienteController();
    private emprestimoController = new EmprestimoController();

    // Transforma em async para os submenus chamar banco
    async exibir(): Promise<void> {
        let sair = false;
        
        while (!sair) {
            console.log("\n====== BookStore Manager CLI ======");
            console.log("1. Gerenciar Autores");
            console.log("2. Gerenciar Livros");
            console.log("3. Gerenciar Clientes");
            console.log("4. Gerenciar Empréstimos");
            console.log("5. Relatórios");
            console.log("0. Encerrar aplicação");
            console.log("===================================");
            
            const opcao = readline.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    // Chamando o submenu de Autores
                    await this.autorController.exibirMenu(); 
                    break;
                case '2':
                    await this.livroController.exibirMenu();
                    break;
                case '3':
                    await this.clienteController.exibirMenu();
                    break;
                case '4':
                    await this.emprestimoController.exibirMenu();
                    break;
                case '5':
                    console.log("\n TEM QUE FAZER!!!...");
                    break;
                case '0':
                    console.log("\nEncerrando a aplicação. Até logo!");
                    sair = true;
                    break;
                default:
                    console.log("\n❌ Opção inválida! Tente novamente.");
            }
        }
    }
}