import { Sensores, SensoresRequest } from "src/interfaces/dadosSensores";
import { StatusRequest, Status } from "src/interfaces/dadosStatus";

export class FormatarDados {
    public static formatarStatus = (dados: StatusRequest): Status => ({
        status: (dados.status) ? 'ativo' : 'inativo',
        velocidade: dados.velocidade,
        dataRegistro: new Date()
    });

    public static formatarSensores = (dados: SensoresRequest): Sensores => ({
        nome: dados.nome,
        status: (dados.status) ? 'ativo' : 'inativo',
        descricao: (dados.condicao) ? 'Sem ocorrências' : 'Sensor está com defeito',
        dataRegistro: new Date()
    });
}
