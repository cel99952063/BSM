import { ClienteService } from '../Services/ClienteService';

/**
 * Controller de Clientes: gerencia o fluxo de entrada e 
 * tratamento de erros para a interface do usuário.
 */
export class ClienteController {
    private clienteService = new ClienteService();

    async cadastrarCliente(nome: string, email: string, cpf: string, telefone?: string): Promise<void> {
        try {
            const cliente = await this.clienteService.criar(nome, email, cpf, telefone);
            console.log(`✅ Cliente cadastrado com sucesso! ID: ${cliente.id} - ${cliente.nome}`);
        } catch (error: any) {
            console.error(`❌ Erro ao cadastrar cliente: ${error.message}`);
        }
    }

    async listarClientes(): Promise<void> {
        try {
            const clientes = await this.clienteService.listar();
            console.table(clientes);
        } catch (error: any) {
            console.error(`❌ Erro ao listar clientes: ${error.message}`);
        }
    }

    async atualizarCliente(id: number, nome: string, email: string, cpf: string, telefone?: string): Promise<void> {
        try {
            const cliente = await this.clienteService.atualizar(id, nome, email, cpf, telefone);
            if (cliente) {
                console.log(`✅ Cliente ${id} atualizado com sucesso!`);
            } else {
                console.log(`⚠️ Cliente com ID ${id} não encontrado.`);
            }
        } catch (error: any) {
            console.error(`❌ Erro ao atualizar cliente: ${error.message}`);
        }
    }

    async removerCliente(id: number): Promise<void> {
        try {
            const sucesso = await this.clienteService.deletar(id);
            if (sucesso) {
                console.log(`✅ Cliente ${id} removido com sucesso.`);
            } else {
                console.log(`⚠️ Cliente com ID ${id} não encontrado para remoção.`);
            }
        } catch (error: any) {
            console.error(`❌ Erro ao remover cliente: ${error.message}`);
        }
    }
}