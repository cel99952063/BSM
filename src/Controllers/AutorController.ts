import { AutorService } from '../Services/AutorService';

/**
 * Controller responsável pela interface entre a entrada de dados (CLI/main.ts)
 * e a lógica de negócio (AutorService).
 */
export class AutorController {
    private autorService: AutorService;

    constructor() {
        // Inicializa o service que contém as regras de negócio
        this.autorService = new AutorService();
    }

    /**
     * Gerencia a chamada para cadastrar um novo autor.
     * Captura possíveis erros de validação vindos do Service.
     */
    async cadastrarAutor(nome: string, nacionalidade: string): Promise<void> {
        try {
            // Chama o service para processar a criação
            const autor = await this.autorService.criar(nome, nacionalidade);
            console.log(`✅ Autor cadastrado com sucesso! ID: ${autor.id} - ${autor.nome}`);
        } catch (error: any) {
            // Caso o service lance um erro (ex: nome vazio), capturamos aqui para exibir
            // ao usuário de forma amigável em vez de interromper o programa.
            console.error(`❌ Erro ao cadastrar autor: ${error.message}`);
        }
    }

    /**
     * Busca todos os registros e exibe de forma formatada no terminal.
     */
    async listarAutores(): Promise<void> {
        try {
            const autores = await this.autorService.listarTodos();
            
            // console.table para grade visual
            console.table(autores);
        } catch (error: any) {
            console.error(`❌ Erro ao listar autores: ${error.message}`);
        }
    }
}