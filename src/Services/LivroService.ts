import { LivroRepository } from '../Repositories/LivroRepository';
import { Livro } from '../Models/Livro';

export class LivroService {
    private livroRepository = new LivroRepository();

    /**
     * Valida e insere um novo livro no bd.
     */
    async criar(titulo: string, ano_publicacao: number, autor_id: number, quantidade_disponivel: number): Promise<Livro> {
        // Validação básica
        if (!titulo || titulo.trim() === '') {
            throw new Error('O título do livro é obrigatório.');
        }
        if (!ano_publicacao || ano_publicacao <= 0) {
            throw new Error('Ano de publicação inválido.');
        }
        if (quantidade_disponivel < 0) {
            throw new Error('A quantidade não pode ser negativa.');
        }
        
        const novoLivro: Livro = { 
            titulo: titulo.trim(), 
            ano_publicacao, 
            autor_id,
            quantidade_disponivel
        };

        return await this.livroRepository.criar(novoLivro);
    }

    async listar(): Promise<any[]> {
        return await this.livroRepository.listar();
    }

    /**
     * Valida dados e atualiza um livro existente por ID.
     */
    async atualizar(id: number, titulo: string, ano_publicacao: number, autor_id: number, quantidade_disponivel: number): Promise<Livro | null> {
        if (!titulo || titulo.trim() === '') {
            throw new Error('O título do livro é obrigatório.');
        }
        if (quantidade_disponivel < 0) {
            throw new Error('A quantidade não pode ser negativa.');
        }

        const livroAtualizado: Livro = { 
            titulo: titulo.trim(), 
            ano_publicacao, 
            autor_id,
            quantidade_disponivel 
        };
        return await this.livroRepository.atualizar(id, livroAtualizado);
    }

    async deletar(id: number): Promise<boolean> {
        return await this.livroRepository.deletar(id);
    }
    async atualizarQuantidade(id: number, quantidade_disponivel: number): Promise<void> {
        if (quantidade_disponivel < 0) {
            throw new Error('A quantidade não pode ser negativa.');
        }
        
        await this.livroRepository.atualizarQuantidade(id, quantidade_disponivel);
    }
}