import { EmprestimoService } from '../Services/EmprestimoService';

export class EmprestimoController {
    private emprestimoService = new EmprestimoService();

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