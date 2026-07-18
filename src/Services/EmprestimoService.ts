import { EmprestimoRepository } from '../Repositories/EmprestimoRepository';
import { LivroRepository } from '../Repositories/LivroRepository';
import { Emprestimo } from '../Models/Emprestimo';

export class EmprestimoService {
    private emprestimoRepository = new EmprestimoRepository();
    private livroRepository = new LivroRepository();

    async criar(livro_id: number, cliente_id: number): Promise<Emprestimo> {
        // 1. Validar disponibilidade (RF10/RF13)
        const livro = await this.livroRepository.buscarPorId(livro_id);
        
        if (!livro) throw new Error('Livro inexistente.');
        if (livro.quantidade_disponivel <= 0) throw new Error('Livro sem disponibilidade.');

        // 2. Registrar o empréstimo
        const novoEmprestimo: Emprestimo = { livro_id, cliente_id, data_emprestimo: new Date() };
        const emprestimo = await this.emprestimoRepository.criar(novoEmprestimo);

        // 3. Atualizar a quantidade disponível do livro (RF11)
        await this.livroRepository.atualizarQuantidade(livro_id, livro.quantidade_disponivel - 1);

        return emprestimo;
    }

    async listar(): Promise<any[]> {
        return await this.emprestimoRepository.listar();
    }

    async registrarDevolucao(id: number, livro_id: number): Promise<void> {
        const sucesso = await this.emprestimoRepository.registrarDevolucao(id);
        if (!sucesso) throw new Error('Empréstimo não encontrado ou já devolvido.');

        // Atualizar quantidade disponível
        const livro = await this.livroRepository.buscarPorId(livro_id);
        if (livro) {
            await this.livroRepository.atualizarQuantidade(livro_id, livro.quantidade_disponivel + 1);
        }
    }
}