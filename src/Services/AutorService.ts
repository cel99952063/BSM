import { Autor } from '../Models/Autor';
import { AutorRepository } from '../Repositories/AutorRepository';

export class AutorService {
    private autorRepository: AutorRepository;

    constructor() {
        this.autorRepository = new AutorRepository();
    }

    // C - Criar
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

    // R - Listar todos
    async listarTodos(): Promise<Autor[]> {
        return await this.autorRepository.listar();
    }

    // U - Update
    async atualizar(id: number, nome: string, nacionalidade: string) {
        if (!nome || nome.trim() === '') {
            throw new Error('O nome do autor é obrigatório para atualização.');
        }
        
        const autorAtualizado = { 
            nome: nome.trim(), 
            nacionalidade: nacionalidade.trim() 
        };
        
        return await this.autorRepository.atualizar(id, autorAtualizado);
    }

    // D - Delete
    async deletar(id: number): Promise<boolean> {
        return await this.autorRepository.deletar(id);
    }
}