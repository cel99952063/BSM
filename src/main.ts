import { AutorController } from './Controllers/AutorController';

async function main() {
    // Instancia o controller ed comunicação com o Service
    const controller = new AutorController();

    console.log("--- Iniciando teste de cadastro de Autor ---");

    // Teste 1: Tentar cadastrar um autor válido
    await controller.cadastrarAutor("Machado de Assis", "Brasileira");

    // Teste 2: Tentar cadastrar um autor inválido (nome vazio) para testar o tratamento de erro
    await controller.cadastrarAutor("", "Desconhecida");

    console.log("\n--- Listagem de Autores no Banco ---");
    
    // Lista os autores para verificar o resultado
    await controller.listarAutores();
}

// Executa a função principal
main().catch(err => console.error("Erro fatal no sistema:", err));