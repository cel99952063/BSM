import pool from '../Database/connection';
import { Livro } from '../Models/Livro';

export class LivroRepository {
    
    // C - Create
    async criar(livro: Livro): Promise<Livro> {
        const query = `
            INSERT INTO livros (titulo, ano_publicacao, autor_id) 
            VALUES ($1, $2, $3) 
            RETURNING *
        `;
        const values = [livro.titulo, livro.ano_publicacao, livro.autor_id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    // R - Read (Listar todos com JOIN para trazer o nome do autor)
    async listar(): Promise<any[]> {
        const query = `
            SELECT 
                l.id, 
                l.titulo, 
                l.ano_publicacao, 
                a.nome AS autor_nome 
            FROM livros l
            JOIN autores a ON l.autor_id = a.id
            ORDER BY l.id ASC
        `;
        const result = await pool.query(query);
        return result.rows;
    }

    // R - Read (Buscar por ID)
    async buscarPorId(id: number): Promise<any | null> {
        const query = `
            SELECT l.*, a.nome AS autor_nome 
            FROM livros l
            JOIN autores a ON l.autor_id = a.id
            WHERE l.id = $1
        `;
        const result = await pool.query(query, [id]);
        return result.rows[0] || null;
    }

    // U - Update
    async atualizar(id: number, livro: Livro): Promise<Livro | null> {
        const query = `
            UPDATE livros 
            SET titulo = $1, ano_publicacao = $2, autor_id = $3 
            WHERE id = $4 
            RETURNING *
        `;
        const values = [livro.titulo, livro.ano_publicacao, livro.autor_id, id];
        const result = await pool.query(query, values);
        return result.rows[0] || null;
    }
    
    // U - Atualizar APENAS a QTDE disponível
    
    async atualizarQuantidade(id: number, quantidade: number): Promise<void> {
        const query = `
            UPDATE livros 
            SET quantidade_disponivel = $1 
            WHERE id = $2
        `;
        await pool.query(query, [quantidade, id]);
    }
    // D - Deelte
    async deletar(id: number): Promise<boolean> {
        const query = 'DELETE FROM livros WHERE id = $1';
        const result = await pool.query(query, [id]);
        return (result.rowCount ?? 0) > 0;
    }
}