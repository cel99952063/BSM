import * as readline from 'readline-sync';
import { EmprestimoService } from '../Services/EmprestimoService';

export class EmprestimoController {
    private emprestimoService = new EmprestimoService();

    async exibirMenu(): Promise<void> {
        let voltar = false;
        while (!voltar) {
            console.log("\n====== Menu de Empréstimos ======");
            console.log("1. Listar Empréstimos");
            console.log("2. Registrar Empréstimo");
            console.log("3. Registrar Devolução");
            console.log("4. Voltar");
            
            const opcao = readline.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    await this.listarEmprestimos();
                    break;
                case '2':
                    const livroId = parseInt(readline.question("ID do livro: "));
                    const clienteId = parseInt(readline.question("ID do cliente: "));
                    await this.realizarEmprestimo(livroId, clienteId);
                    break;
                case '3':
                    const empId = parseInt(readline.question("ID do empréstimo: "));
                    const livId = parseInt(readline.question("ID do livro: "));
                    await this.registrarDevolucao(empId, livId);
                    break;
                case '4':
                    voltar = true;
                    break;
                default:
                    console.log("❌ Opção inválida!");
            }
        }
    }

    async realizarEmprestimo(livro_id: number, cliente_id: number): Promise<void> {
        try {
            const emp = await this.emprestimoService.criar(livro_id, cliente_id);
            console.log(`✅ Empréstimo registrado com sucesso! ID: ${emp.id}`);
        } catch (error: any) {
            console.error(`❌ Erro ao realizar empréstimo: ${error.message}`);
        }
    }

    async listarEmprestimos(): Promise<void> {
        try {
            const lista = await this.emprestimoService.listar();
            console.table(lista);
        } catch (error: any) {
            console.error(`❌ Erro ao listar empréstimos: ${error.message}`);
        }
    }

    async registrarDevolucao(id: number, livro_id: number): Promise<void> {
        try {
            await this.emprestimoService.registrarDevolucao(id, livro_id);
            console.log(`✅ Devolução registrada com sucesso.`);
        } catch (error: any) {
            console.error(`❌ Erro ao registrar devolução: ${error.message}`);
        }
    }
}