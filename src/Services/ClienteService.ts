import { ClienteRepository } from '../Repositories/ClienteRepository';
import { Cliente } from '../Models/Cliente';

/**
 * Service de Clientes: gerencia regras de negócio e validações
 * para garantir a integridade dos dados cadastrados.
 */
export class ClienteService {
    private clienteRepository = new ClienteRepository();

    /**
     * Cria um cliente após validar as informações básicas.
     */
    async criar(nome: string, email: string, cpf: string, telefone?: string): Promise<Cliente> {
        // Validação básica
        if (!nome || nome.trim() === '') throw new Error('O nome é obrigatório.');
        if (!email.includes('@')) throw new Error('E-mail inválido.');
        if (!cpf || cpf.length < 11) throw new Error('CPF deve ter pelo menos 11 caracteres.');

        const novoCliente: Cliente = {
            nome: nome.trim(),
            email: email.trim(),
            cpf: cpf.trim(),
            telefone
        };

        return await this.clienteRepository.criar(novoCliente);
    }

    /**
     * Lista todos os clientes.
     */
    async listar(): Promise<Cliente[]> {
        return await this.clienteRepository.listar();
    }

    /**
     * Atualiza um cliente existente.
     */
    async atualizar(id: number, nome: string, email: string, cpf: string, telefone?: string): Promise<Cliente | null> {
        if (!nome || nome.trim() === '') throw new Error('O nome é obrigatório.');
        
        const clienteAtualizado: Cliente = {
            nome: nome.trim(),
            email: email.trim(),
            cpf: cpf.trim(),
            telefone
        };

        return await this.clienteRepository.atualizar(id, clienteAtualizado);
    }

    /**
     * Remove um cliente pelo ID.
     */
    async deletar(id: number): Promise<boolean> {
        return await this.clienteRepository.deletar(id);
    }
}