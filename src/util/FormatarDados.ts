import { StatusRequest, Status } from "src/interfaces/dadosStatus";

export class FormatarDados {
    public static formatarStatus = (dados: StatusRequest): Status => ({
        status: (dados.status) ? 'ativo' : 'inativo',
        velocidade: dados.velocidade,
        dataRegistro: new Date().toISOString()
    });
}
