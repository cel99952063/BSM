import { LivroService } from '../Services/LivroService';

/**
 * Controller responsável por receber as requisições, 
 * invocar o Service e gerenciar o tratamento de erros.
 */
export class LivroController {
    private livroService = new LivroService();

    /**
     * Cadastra um novo livro e trata possíveis erros de validação.
     */
    async cadastrarLivro(titulo: string, ano_publicacao: number, autor_id: number): Promise<void> {
        try {
            const livro = await this.livroService.criar(titulo, ano_publicacao, autor_id);
            console.log(`✅ Livro cadastrado com sucesso! ID: ${livro.id} - ${livro.titulo}`);
        } catch (error: any) {
            // Captura erros de validação ou de banco de dados e exibe no console
            console.error(`❌ Erro ao cadastrar livro: ${error.message}`);
        }
    }

    /**
     * Lista todos os livros cadastrados usando o console.table para legibilidade.
     */
    async listarLivros(): Promise<void> {
        try {
            const livros = await this.livroService.listar();
            console.table(livros);
        } catch (error: any) {
            console.error(`❌ Erro ao listar livros: ${error.message}`);
        }
    }

    /**
     * Atualiza os dados de um livro e trata erros, como ID inexistente.
     */
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

    /**
     * Remove um livro e trata o sucesso ou falha da operação.
     */
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