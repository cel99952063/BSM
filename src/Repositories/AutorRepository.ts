import pool from '../Database/connection';
import { Autor } from '../Models/Autor';

export class AutorRepository {
    
    // C - Create
    async criar(autor: Autor): Promise<Autor> {
        const query = 'INSERT INTO autores (nome, nacionalidade) VALUES ($1, $2) RETURNING *';
        const values = [autor.nome, autor.nacionalidade];
        
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    // R - Read (Listar todos)
    async listar(): Promise<Autor[]> {
        const query = 'SELECT * FROM autores ORDER BY id ASC';
        const result = await pool.query(query);
        return result.rows;
    }

    // R - Read (Buscar por ID)
    async buscarPorId(id: number): Promise<Autor | null> {
        const query = 'SELECT * FROM autores WHERE id = $1';
        const result = await pool.query(query, [id]);
        
        return result.rows[0] || null;
    }

    // U - Update
    async atualizar(id: number, autor: Autor): Promise<Autor | null> {
        const query = 'UPDATE autores SET nome = $1, nacionalidade = $2 WHERE id = $3 RETURNING *';
        const values = [autor.nome, autor.nacionalidade, id];
        
        const result = await pool.query(query, values);
        return result.rows[0] || null;
    }

    // D - Delete
    async deletar(id: number): Promise<boolean> {
        const query = 'DELETE FROM autores WHERE id = $1';
        const result = await pool.query(query, [id]);
        
        // Retorna true se alguma linha foi deletada
        return (result.rowCount ?? 0) > 0;
    }
}