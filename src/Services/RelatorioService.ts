import { RelatorioRepository } from '../Repositories/RelatorioRepository';

export class RelatorioService {
    private repository = new RelatorioRepository();

    async listarLivrosEmprestadosAtualmente(): Promise<any[]> {
        return await this.repository.buscarLivrosEmprestados();
    }
}