export interface SensoresRequest {
    nome: string;
    status: boolean;
    condicao: boolean;
}

export interface Sensores {
    sensor: string;
    status: 'ativo' | 'inativo';
    descricao: string;
    dataRegistro: Date;
}
