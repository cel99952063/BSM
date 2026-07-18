import pool from '../Database/connection';
import { Emprestimo } from '../Models/Emprestimo';

export class EmprestimoRepository {
    
    // C - Realizar Empréstimo
    async criar(emprestimo: Emprestimo): Promise<Emprestimo> {
        const query = `
            INSERT INTO emprestimos (livro_id, cliente_id, data_emprestimo) 
            VALUES ($1, $2, CURRENT_DATE) 
            RETURNING *
        `;
        const values = [emprestimo.livro_id, emprestimo.cliente_id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    // R - Listar Empréstimos com JOIN (RF12 e RF17)
    async listar(): Promise<any[]> {
        const query = `
            SELECT e.id, l.titulo, c.nome as cliente_nome, e.data_emprestimo, e.data_devolucao
            FROM emprestimos e
            JOIN livros l ON e.livro_id = l.id
            JOIN clientes c ON e.cliente_id = c.id
            ORDER BY e.data_emprestimo DESC
        `;
        const result = await pool.query(query);
        return result.rows;
    }

    // U - Registrar Devolução (rf11 e 16)
    async registrarDevolucao(id: number): Promise<boolean> {
        const query = `
            UPDATE emprestimos 
            SET data_devolucao = CURRENT_DATE 
            WHERE id = $1 AND data_devolucao IS NULL
        `;
        const result = await pool.query(query, [id]);
        return (result.rowCount ?? 0) > 0;
    }
}