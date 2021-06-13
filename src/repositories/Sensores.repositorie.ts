import { Sensores, SensoresRequest } from "../interfaces/dadosSensores";
import { CacheServico } from "../servicos/CacheServico";
import { FormatarDados } from "../util/FormatarDados";

export class SensoresRepositorie {
    public static buscarSensores = (): Sensores[] => {
        const cache = CacheServico.getCache();
        return cache.buscar<Sensores[]>('sensores');
    };

    public static salvarSensores = (dados: SensoresRequest) => {
        const sensoresCache = SensoresRepositorie.buscarSensores();

        const cache = CacheServico.getCache();
        const dadosFormatados = FormatarDados.formatarSensores(dados);

        const sensores = sensoresCache.map((sensor) => {
            if (sensor.nome === dadosFormatados.nome) return dadosFormatados;
            else return sensor;
        });

        return cache.salvar<Sensores[]>('sensores', sensores);
    };
}
