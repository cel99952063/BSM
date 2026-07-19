import * as readline from 'readline-sync';
import { LivroService } from '../Services/LivroService';

/**
 * Controller responsável por receber as requisições, 
 * invocar o Service e gerenciar o tratamento de erros.
 */
export class LivroController {
    private livroService = new LivroService();

    async exibirMenu(): Promise<void> {
        let voltar = false;
        while (!voltar) {
            console.log("\n====== Menu de Livros ======");
            console.log("1. Listar Livros");
            console.log("2. Cadastrar Livro");
            console.log("3. Atualizar Livro");
            console.log("4. Remover Livro");
            console.log("5. Voltar");
            
            const opcao = readline.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    await this.listarLivros();
                    break;
                case '2':
                    const titulo = readline.question("Título do livro: ");
                    const ano = parseInt(readline.question("Ano de publicação: "));
                    const autorId = parseInt(readline.question("ID do autor: "));
                    await this.cadastrarLivro(titulo, ano, autorId);
                    break;
                case '3':
                    const idUp = parseInt(readline.question("ID do livro para atualizar: "));
                    const tituloUp = readline.question("Novo título: ");
                    const anoUp = parseInt(readline.question("Novo ano: "));
                    const autorIdUp = parseInt(readline.question("Novo ID do autor: "));
                    await this.atualizarLivro(idUp, tituloUp, anoUp, autorIdUp);
                    break;
                case '4':
                    const idDel = parseInt(readline.question("ID do livro para remover: "));
                    await this.removerLivro(idDel);
                    break;
                case '5':
                    voltar = true;
                    break;
                default:
                    console.log("❌ Opção inválida!");
            }
        }
    }

    async cadastrarLivro(titulo: string, ano_publicacao: number, autor_id: number): Promise<void> {
        try {
            const livro = await this.livroService.criar(titulo, ano_publicacao, autor_id);
            console.log(`✅ Livro cadastrado com sucesso! ID: ${livro.id} - ${livro.titulo}`);
        } catch (error: any) {
            console.error(`❌ Erro ao cadastrar livro: ${error.message}`);
        }
    }

    async listarLivros(): Promise<void> {
        try {
            const livros = await this.livroService.listar();
            console.table(livros);
        } catch (error: any) {
            console.error(`❌ Erro ao listar livros: ${error.message}`);
        }
    }

    async atualizarLivro(id: number, titulo: string, ano_publicacao: number, autor_id: number): Promise<void> {
        try {
            const livro = await this.livroService.atualizar(id, titulo, ano_publicacao, autor_id);
            if (livro) {
                console.log(`✅ Livro ${id} atualizado com sucesso para: ${livro.titulo}`);
            } else {
                console.log(`⚠️ Livro com ID ${id} não encontrado.`);
            }
        } catch (error: any) {
            console.error(`❌ Erro ao atualizar livro: ${error.message}`);
        }
    }

    async removerLivro(id: number): Promise<void> {
        try {
            const sucesso = await this.livroService.deletar(id);
            if (sucesso) {
                console.log(`✅ Livro ${id} removido com sucesso.`);
            } else {
                console.log(`⚠️ Livro com ID ${id} não encontrado para remoção.`);
            }
        } catch (error: any) {
            console.error(`❌ Erro ao remover livro: ${error.message}`);
        }
    }
}