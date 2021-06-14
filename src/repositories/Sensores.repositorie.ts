import { Sensores, SensoresRequest } from "../interfaces/dadosSensores";
import { CacheServico } from "../servicos/CacheServico";
import { FormatarDados } from "../util/FormatarDados";

export class SensoresRepositorie {
    public static buscarSensores = (): Sensores[] => {
        const cache = CacheServico.getCache();
        return cache.buscar<Sensores[]>('sensores');
    };

    public static salvarSensores = (dados: SensoresRequest) => {
        const sensores = SensoresRepositorie.buscarSensores();

        const cache = CacheServico.getCache();
        const novoSensor = FormatarDados.formatarSensor(dados);

        const indice = sensores.findIndex(({ sensor }) => (
            sensor.toLowerCase() === novoSensor.sensor.toLowerCase()
        ));

        if (indice === -1) sensores.push(novoSensor);
        else sensores[indice] = novoSensor;

        return cache.salvar<Sensores[]>('sensores', sensores);
    };
}
