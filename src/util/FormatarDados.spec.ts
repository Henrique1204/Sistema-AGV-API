import { FormatarDados } from './FormatarDados';

describe('Testando formatação de dados', () => {
    it('Deveria retornar um objeto com status, velocidade e dataRegistro', () => {
        const retorno = FormatarDados.formatarStatus({ status: true, velocidade: '0m/s' });

        expect(retorno).toHaveProperty('status');
        expect(retorno).toHaveProperty('velocidade');
        expect(retorno).toHaveProperty('dataRegistro');
    });

    it('Deveria retornar um objeto com nome, status, descricao e dataRegistro', () => {
        const retorno = FormatarDados.formatarSensor({
            nome: 'Sensor A',
            status: true,
            condicao: false
        });

        expect(retorno).toHaveProperty('sensor');
        expect(retorno).toHaveProperty('status');
        expect(retorno).toHaveProperty('condicao');
        expect(retorno).toHaveProperty('descricao');
        expect(retorno).toHaveProperty('dataRegistro');
    });
});
