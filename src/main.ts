import pool from './Database/connection';
import { MenuPrincipal } from './Menus/MenuPrincipal';


async function main() {
    console.log("--- BSM (BookStore Manager) ---");
    console.log("🔄 Verificando conexão com o banco de dados...");

    try {
        // Teste de conexão
        await pool.query('SELECT NOW()');
        console.log("✅ Conexão com PostgreSQL estabelecida com sucesso!");

        // Inicia Menu Principal
        const menu = new MenuPrincipal();
        await menu.exibir();

    } catch (error) {
        console.error("❌ Erro fatal: Não foi possível conectar ao banco de dados.");
        console.error("Certifique-se de que o PostgreSQL está rodando e as credenciais no .env estão corretas.");
        process.exit(1);
    }
}

main();