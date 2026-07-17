import { AutorController } from './Controllers/AutorController';

async function main() {
    const controller = new AutorController();

    console.log("--- Iniciando testes do CRUD de Autores ---");

    // 1. CREATE
    console.log("\n[1] Cadastrando novo autor...");
    await controller.cadastrarAutor("Clarice Lispector", "Brasileira");

    // 2. READ
    console.log("\n[2] Listando autores após cadastro:");
    await controller.listarAutores();

    // 3. UPDATE (Vamos supor que o ID 1 seja o Machado de Assis do teste anterior, ou a Clarice seja o ID 2)
    // Ajuste o ID abaixo caso seu banco esteja com IDs diferentes
    console.log("\n[3] Atualizando autor de ID 1...");
    await controller.atualizarAutor(1, "Machado de Assis (Atualizado)", "Brasileiro");

    // 4. READ Novamente para ver a atualização
    console.log("\n[4] Listando autores após atualização:");
    await controller.listarAutores();

    // 5. DELETE
    console.log("\n[5] Removendo autor de ID 1...");
    await controller.removerAutor(1);

    // 6. READ Final para confirmar a exclusão
    console.log("\n[6] Listagem final de autores:");
    await controller.listarAutores();
}

main().catch(err => console.error("Erro fatal no sistema:", err));