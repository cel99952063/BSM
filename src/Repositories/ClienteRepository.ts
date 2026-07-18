import pool from '../Database/connection';
import { Cliente } from '../Models/Cliente';

export class ClienteRepository {
    async criar(cliente: Cliente): Promise<Cliente> {
        const query = `
            INSERT INTO clientes (nome, email, telefone, cpf) 
            VALUES ($1, $2, $3, $4) 
            RETURNING *
        `;
        const values = [cliente.nome, cliente.email, cliente.telefone, cliente.cpf];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    async listar(): Promise<Cliente[]> {
        const query = 'SELECT * FROM clientes ORDER BY id ASC';
        const result = await pool.query(query);
        return result.rows;
    }

    async atualizar(id: number, cliente: Cliente): Promise<Cliente | null> {
        const query = `
            UPDATE clientes 
            SET nome = $1, email = $2, telefone = $3, cpf = $4 
            WHERE id = $5 
            RETURNING *
        `;
        const values = [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, id];
        const result = await pool.query(query, values);
        return result.rows[0] || null;
    }

    async deletar(id: number): Promise<boolean> {
        const query = 'DELETE FROM clientes WHERE id = $1';
        const result = await pool.query(query, [id]);
        return (result.rowCount ?? 0) > 0;
    }
}