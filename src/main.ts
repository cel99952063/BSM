import pool from './Database/connection';

async function main() {
    console.log('Iniciando BookStore Manager CLI...');
    
    try {
        // Faz consulta simples para testar comunicação
        const res = await pool.query('SELECT NOW()');
        console.log('✅ Banco conectado com sucesso! Data do servidor:', res.rows[0].now);
    } catch (error) {
        console.error('❌ Erro ao conectar no banco de dados:', error);
    } finally {
        
        await pool.end();
    }
}

main();