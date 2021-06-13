export interface SensoresRequest {
    nome: string;
    status: boolean;
    condicao: boolean;
}

export interface Sensores {
    sensor: string;
    status: 'ativo' | 'inativo';
    condicao: 'funcionando' | 'danificado';
    descricao: string;
    dataRegistro: Date;
}
