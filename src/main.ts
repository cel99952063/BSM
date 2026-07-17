import { LivroController } from './Controllers/LivroController';

async function main() {
    const livroController = new LivroController();

    console.log("--- Iniciando testes do CRUD de Livros ---");

    // 1. CREATE: Cadastrando um livro (Certifique-se de que o autor_id 2 exista no banco)
    console.log("\n[1] Cadastrando novo livro...");
    await livroController.cadastrarLivro("Dom Casmurro", 1899, 2);

    // 2. READ: Listando livros
    console.log("\n[2] Listagem de livros:");
    await livroController.listarLivros();

    // 3. UPDATE: Atualizando o título do livro
    console.log("\n[3] Atualizando livro de ID 1...");
    await livroController.atualizarLivro(1, "Dom Casmurro (Edição Comemorativa)", 1899, 2);

    // 4. DELETE: Removendo o livro
    console.log("\n[4] Removendo livro de ID 1...");
    await livroController.removerLivro(1);

    // 5. READ FINAL: Conferindo a lista
    console.log("\n[5] Listagem final:");
    await livroController.listarLivros();
}

main().catch(err => console.error("Erro fatal no sistema:", err));