import { Autor } from '../Models/Autor';
import { AutorRepository } from '../Repositories/AutorRepository';

export class AutorService {
    private autorRepository: AutorRepository;

    constructor() {
        this.autorRepository = new AutorRepository();
    }

    async criar(nome: string, nacionalidade: string): Promise<Autor> {
        // validar campos obrigatórios
        if (!nome || nome.trim() === '') {
            throw new Error('O nome do autor é obrigatório.');
        }

        const novoAutor: Autor = {
            nome: nome.trim(),
            nacionalidade: nacionalidade.trim()
        };

        return await this.autorRepository.criar(novoAutor);
    }

    async listarTodos(): Promise<Autor[]> {
        return await this.autorRepository.listar();
    }
}