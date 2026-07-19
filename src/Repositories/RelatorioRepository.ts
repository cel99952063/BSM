import  pool  from '../Database/connection';

export class RelatorioRepository {
    async buscarLivrosEmprestados(): Promise<any[]> {
        const query = `
            SELECT 
                l.titulo, 
                c.nome AS cliente, 
                TO_CHAR(e.data_emprestimo, 'DD/MM/YYYY') AS data_emprestimo
            FROM Livros l
            INNER JOIN Emprestimos e ON l.id = e.livro_id
            INNER JOIN Clientes c ON e.cliente_id = c.id
            WHERE e.data_devolucao IS NULL
            ORDER BY e.data_emprestimo DESC;
        `;
        const result = await pool.query(query);
        return result.rows;
    }
}