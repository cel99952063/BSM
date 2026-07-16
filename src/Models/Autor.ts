export interface Autor {
    id?: number; // Opcional (com '?') porque o banco gera automaticamente
    nome: string;
    nacionalidade?: string;
}