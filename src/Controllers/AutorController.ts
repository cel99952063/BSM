import * as readline from 'readline-sync';
import { AutorService } from '../Services/AutorService';

/**
 * Controller responsável pela interface entre a entrada de dados (CLI/main.ts)
 * e a lógica de negócio (AutorService).
 */
export class AutorController {
    private autorService: AutorService;

    constructor() {
        // Inicializa o service que contém as regras de negócio
        this.autorService = new AutorService();
    }

    async exibirMenu(): Promise<void> {
        let voltar = false;
        while (!voltar) {
            console.log("\n====== Menu de Autores ======");
            console.log("1. Listar Autores");
            console.log("2. Cadastrar Autor");
            console.log("3. Atualizar Autor");
            console.log("4. Remover Autor");
            console.log("5. Voltar");
            
            const opcao = readline.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    await this.listarAutores();
                    break;
                case '2':
                    const nome = readline.question("Nome do autor: ");
                    const nacionalidade = readline.question("Nacionalidade: ");
                    await this.cadastrarAutor(nome, nacionalidade);
                    break;
                case '3':
                    const idUp = parseInt(readline.question("ID do autor para atualizar: "));
                    const nomeUp = readline.question("Novo nome: ");
                    const nacUp = readline.question("Nova nacionalidade: ");
                    await this.atualizarAutor(idUp, nomeUp, nacUp);
                    break;
                case '4':
                    const idDel = parseInt(readline.question("ID do autor para remover: "));
                    await this.removerAutor(idDel);
                    break;
                case '5':
                    voltar = true;
                    break;
                default:
                    console.log("❌ Opção inválida!");
            }
        }
    }

    /**
     * Gerencia a chamada para cadastrar um novo autor.
     */
    async cadastrarAutor(nome: string, nacionalidade: string): Promise<void> {
        try {
            const autor = await this.autorService.criar(nome, nacionalidade);
            console.log(`✅ Autor cadastrado com sucesso! ID: ${autor.id} - ${autor.nome}`);
        } catch (error: any) {
            console.error(`❌ Erro ao cadastrar autor: ${error.message}`);
        }
    }

    /**
     * Busca todos os registros, formata e exibe.
     */
    async listarAutores(): Promise<void> {
        try {
            const autores = await this.autorService.listarTodos();
            console.table(autores);
        } catch (error: any) {
            console.error(`❌ Erro ao listar autores: ${error.message}`);
        }
    }

    // U - Update
    async atualizarAutor(id: number, nome: string, nacionalidade: string): Promise<void> {
        try {
            const autor = await this.autorService.atualizar(id, nome, nacionalidade);
            if (autor) {
                console.log(`✅ Autor ${id} atualizado com sucesso para: ${autor.nome}`);
            } else {
                console.log(`⚠️ Autor com ID ${id} não encontrado para atualização.`);
            }
        } catch (error: any) {
            console.error(`❌ Erro ao atualizar autor: ${error.message}`);
        }
    }

    // D - Delete
    async removerAutor(id: number): Promise<void> {
        try {
            const sucesso = await this.autorService.deletar(id);
            if (sucesso) {
                console.log(`✅ Autor ${id} removido com sucesso.`);
            } else {
                console.log(`⚠️ Autor com ID ${id} não encontrado para remoção.`);
            }
        } catch (error: any) {
            console.error(`❌ Erro ao remover autor: ${error.message}`);
        }
    }
}