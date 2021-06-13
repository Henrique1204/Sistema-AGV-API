export interface SensoresRequest {
    nome: string;
    status: boolean;
    condicao: boolean;
}

export interface Sensores {
    nome: string;
    status: 'ativo' | 'inativo';
    descricao: string;
    dataRegistro: Date;
}
