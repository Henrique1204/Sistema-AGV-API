import { FormatarDados } from './FormatarDados';

describe('Testando formatação de dados', () => {
    it('Deveria retornar um objeto com status, velocidade e dataRegistro', () => {
        const retorno = FormatarDados.formatarStatus({ status: true, velocidade: '0m/s' });

        expect(retorno).toHaveProperty('status');
        expect(retorno).toHaveProperty('velocidade');
        expect(retorno).toHaveProperty('dataRegistro');
    });
});
