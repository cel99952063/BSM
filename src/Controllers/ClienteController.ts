import * as readline from 'readline-sync';
import { ClienteService } from '../Services/ClienteService';

/**
 * Controller de Clientes: gerencia o fluxo de entrada e 
 * tratamento de erros para a interface do usuário.
 */
export class ClienteController {
    private clienteService = new ClienteService();

    async exibirMenu(): Promise<void> {
        let voltar = false;
        while (!voltar) {
            console.log("\n====== Menu de Clientes ======");
            console.log("1. Listar Clientes");
            console.log("2. Cadastrar Cliente");
            console.log("3. Atualizar Cliente");
            console.log("4. Remover Cliente");
            console.log("5. Voltar");
            
            const opcao = readline.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    await this.listarClientes();
                    break;
                case '2':
                    const nome = readline.question("Nome: ");
                    const email = readline.question("E-mail: ");
                    const cpf = readline.question("CPF: ");
                    const tel = readline.question("Telefone (opcional): ");
                    await this.cadastrarCliente(nome, email, cpf, tel || undefined);
                    break;
                case '3':
                    const idUp = parseInt(readline.question("ID do cliente para atualizar: "));
                    const nomeUp = readline.question("Novo nome: ");
                    const emailUp = readline.question("Novo e-mail: ");
                    const cpfUp = readline.question("Novo CPF: ");
                    const telUp = readline.question("Novo telefone (opcional): ");
                    await this.atualizarCliente(idUp, nomeUp, emailUp, cpfUp, telUp || undefined);
                    break;
                case '4':
                    const idDel = parseInt(readline.question("ID do cliente para remover: "));
                    await this.removerCliente(idDel);
                    break;
                case '5':
                    voltar = true;
                    break;
                default:
                    console.log("❌ Opção inválida!");
            }
        }
    }

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