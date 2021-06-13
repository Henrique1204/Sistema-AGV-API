import { Status, StatusRequest } from "../interfaces/dadosStatus";
import { CacheServico } from "../servicos/CacheServico";
import { FormatarDados } from "../util/FormatarDados";

export class StatusRepositorie {
    public static buscarSatus = (): Status => {
        const cache = CacheServico.getCache();
        return cache.buscar('status');
    };

    public static salvarStatus = (dados: StatusRequest) => {
        const cache = CacheServico.getCache();
        const status = FormatarDados.formatarStatus(dados);
        return cache.salvar('status', status);
    };
}
