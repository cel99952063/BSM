import { LivroRepository } from '../Repositories/LivroRepository';
import { Livro } from '../Models/Livro';

/**
 * Service responsável pela regra de negócio da entidade Livro.
 * Faz a ponte entre o Controller e o Repository.
 */
export class LivroService {
    private livroRepository = new LivroRepository();

    /**
     * Valida e insere um novo livro no bd.
     */
    async criar(titulo: string, ano_publicacao: number, autor_id: number): Promise<Livro> {
        // Validação básica de campos obrigatórios
        if (!titulo || titulo.trim() === '') {
            throw new Error('O título do livro é obrigatório.');
        }
        if (!ano_publicacao || ano_publicacao <= 0) {
            throw new Error('Ano de publicação inválido.');
        }
        
        const novoLivro: Livro = { 
            titulo: titulo.trim(), 
            ano_publicacao, 
            autor_id 
        };

        // Chama o repositório para persistência
        return await this.livroRepository.criar(novoLivro);
    }

    /**
     * Busca todos os livros cadastrados, incluindo dados do autor via JOIN.
     */
    async listar(): Promise<any[]> {
        return await this.livroRepository.listar();
    }

    /**
     * Valida dados e atualiza um livro existente por ID.
     */
    async atualizar(id: number, titulo: string, ano_publicacao: number, autor_id: number): Promise<Livro | null> {
        // Garante que o título não seja enviado vazio
        if (!titulo || titulo.trim() === '') {
            throw new Error('O título do livro é obrigatório.');
        }

        const livroAtualizado: Livro = { 
            titulo: titulo.trim(), 
            ano_publicacao, 
            autor_id 
        };

        return await this.livroRepository.atualizar(id, livroAtualizado);
    }

    /**
     * Remove um livro do banco de dados pelo seu ID.
     */
    async deletar(id: number): Promise<boolean> {
        return await this.livroRepository.deletar(id);
    }
}