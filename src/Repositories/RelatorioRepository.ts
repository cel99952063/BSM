import  pool  from '../Database/connection';

export class RelatorioRepository {
    // 1. Livros emptestados X clientes
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

    // 2. Livros Disponíveis
    async buscarLivrosDisponiveis(): Promise<any[]> {
        const query = "SELECT id, titulo, quantidade_disponivel FROM livros WHERE quantidade_disponivel > 0";
        const result = await pool.query(query);
        return result.rows;
    }

    // 3. Livros por Autor
    async buscarLivrosPorAutor(): Promise<any[]> {
        const query = `
            SELECT a.nome AS autor, l.titulo 
            FROM autores a 
            JOIN livros l ON a.id = l.autor_id 
            ORDER BY a.nome`;
        const result = await pool.query(query);
        return result.rows;
    }

    // 4. Histórico de Empréstimos por Livro
    async buscarTotalEmprestimosPorLivro(): Promise<any[]> {
        const query = `
            SELECT l.titulo, COUNT(e.id) as total_emprestimos 
            FROM livros l 
            LEFT JOIN emprestimos e ON l.id = e.livro_id 
            GROUP BY l.titulo`;
        const result = await pool.query(query);
        return result.rows;
    }

    // 5. Clientes com Empréstimos Ativos
    async buscarClientesComEmprestimosAtivos(): Promise<any[]> {
        const query = `
            SELECT DISTINCT c.nome, c.email 
            FROM clientes c 
            JOIN emprestimos e ON c.id = e.cliente_id 
            WHERE e.data_devolucao IS NULL`;
        const result = await pool.query(query);
        return result.rows;
    }
}