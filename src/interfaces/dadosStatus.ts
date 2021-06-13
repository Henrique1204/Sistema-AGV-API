export interface StatusRequest {
    status: boolean;
    velocidade: string;
}

export interface Status {
    status: 'ativo' | 'inativo';
    velocidade: string;
    dataRegistro: Date;
}
