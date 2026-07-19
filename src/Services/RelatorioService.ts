import { RelatorioRepository } from '../Repositories/RelatorioRepository';

export class RelatorioService {
    private repository = new RelatorioRepository();

    // 1. Livros Emprestados
    async listarLivrosEmprestadosAtualmente(): Promise<any[]> {
        return await this.repository.buscarLivrosEmprestados();
    }

    // 2. Livros Disponíveis
    async listarLivrosDisponiveis(): Promise<any[]> {
        return await this.repository.buscarLivrosDisponiveis();
    }

    // 3. Livros por Autor
    async listarLivrosPorAutor(): Promise<any[]> {
        return await this.repository.buscarLivrosPorAutor();
    }

    // 4. Histórico de Empréstimos por Livro
    async listarTotalEmprestimosPorLivro(): Promise<any[]> {
        return await this.repository.buscarTotalEmprestimosPorLivro();
    }

    // 5. Clientes com Empréstimos Ativos
    async listarClientesComEmprestimosAtivos(): Promise<any[]> {
        return await this.repository.buscarClientesComEmprestimosAtivos();
    }
}