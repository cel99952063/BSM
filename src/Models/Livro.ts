export interface Livro {
    id?: number;
    titulo: string;
    ano_publicacao: number;
    autor_id: number; // Chave estrangeira para o Autor
}