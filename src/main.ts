
import { ClienteController } from './Controllers/ClienteController';
import { LivroController } from './Controllers/LivroController';
import { EmprestimoController } from './Controllers/EmprestimoController';

async function main() {
    const clienteController = new ClienteController();
    const livroController = new LivroController();
    const emprestimoController = new EmprestimoController();

    console.log("--- Testando Fluxo de Empréstimos ---");

    // 2. Empresta
    console.log("\nTentando realizar empréstimo (Livro ID 2, Cliente ID 2):");
    await emprestimoController.realizarEmprestimo(2, 2);

    // 3. Listar para ver o JOIN
    console.log("\nListagem de Empréstimos:");
    await emprestimoController.listarEmprestimos();

    // 4. Tenta emprestar o mesmo livro 
    
    console.log("\nTeste de validação (RF13):");
    await emprestimoController.realizarEmprestimo(2, 2);

    // 5. Registrar Devolução
    console.log("\nRegistrando devolução (Empréstimo ID 1):");
    await emprestimoController.registrarDevolucao(3, 2);
}

main();