import * as readline from 'readline-sync';

export class RelatorioController {
    
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
                return; // Volta para o MenuPrincipal
            default:
                console.log("❌ Opção inválida!");
        }
    }

    private async gerarRelatorioLivros(): Promise<void> {
        console.log("\n🔄 Consultando dados no banco...");
        // Aqui depois eu colco pra chmar RelatorioService 
        console.log("✅ (Relatório de livros gerado com sucesso)");
    }
}