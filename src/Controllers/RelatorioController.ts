import * as readline from 'readline-sync';
import { RelatorioService } from '../Services/RelatorioService'; 

export class RelatorioController {
    private relatorioService = new RelatorioService(); 

    async exibirMenu(): Promise<void> {
        let sair = false;
        while (!sair) {
            console.log("\n====== Módulo de Relatórios ======");
            console.log("1. Livros Disponíveis");
            console.log("2. Livros Emprestados");
            console.log("3. Livros por Autor");
            console.log("4. Histórico de Empréstimos por Livro");
            console.log("5. Clientes com Empréstimos Ativos");
            console.log("6. Voltar ao Menu Principal");
            
            const opcao = readline.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1': await this.gerarRelatorio("Livros Disponíveis", () => this.relatorioService.listarLivrosDisponiveis()); break;
                case '2': await this.gerarRelatorio("Livros Emprestados", () => this.relatorioService.listarLivrosEmprestadosAtualmente()); break;
                case '3': await this.gerarRelatorio("Livros por Autor", () => this.relatorioService.listarLivrosPorAutor()); break;
                case '4': await this.gerarRelatorio("Total por Livro", () => this.relatorioService.listarTotalEmprestimosPorLivro()); break;
                case '5': await this.gerarRelatorio("Clientes Ativos", () => this.relatorioService.listarClientesComEmprestimosAtivos()); break;
                case '6': sair = true; break;
                default: console.log("❌ Opção inválida!");
            }
        }
    }

    // Método para exibir qualquer relatório. JÁ FIZ O TRATAMENTO ERR
    private async gerarRelatorio(titulo: string, callback: () => Promise<any[]>): Promise<void> {
        console.log(`\n🔄 Consultando ${titulo}...`);
        try {
            const dados = await callback();
            if (dados.length === 0) {
                console.log("✅ Nenhum dado encontrado para este relatório.");
            } else {
                console.table(dados);
            }
        } catch (error) {
            console.error(`❌ Erro ao gerar ${titulo}:`, error);
        }
    }
}