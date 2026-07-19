import * as readline from 'readline-sync';
import { RelatorioService } from '../Services/RelatorioService'; 

export class RelatorioController {
    private relatorioService = new RelatorioService(); 

    async exibirMenu(): Promise<void> {
        console.log("\n====== Módulo de Relatórios ======");
        console.log("1. Livros Disponíveis vs. Emprestados");
        console.log("2. Voltar ao Menu Principal");
        
        const opcao = readline.question("Escolha uma opcao: ");

        switch (opcao) {
            case '1':
                await this.gerarRelatorioLivros();
                break;
            case '2':
                return;
            default:
                console.log("❌ Opção inválida!");
        }
    }

    private async gerarRelatorioLivros(): Promise<void> {
        console.log("\n🔄 Consultando dados no banco...");
        try {
            
            const dados = await this.relatorioService.listarLivrosEmprestadosAtualmente();
            
            if (dados.length === 0) {
                console.log("✅ Não há livros emprestados no momento.");
            } else {
                console.table(dados); // tabelinha marota
            }
        } catch (error) {
            console.error("Erro ao gerar relatório:", error);
        }
    }
}