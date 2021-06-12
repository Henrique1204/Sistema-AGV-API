import { CacheServico } from './CacheServico';

const cache = CacheServico.getCache();

describe('Testando serviço para cache', () => {
    it('Deveria retornar true ao salvar', () => {
        const sucesso = cache.salvar('teste', 'valor');
        expect(sucesso).toBeTruthy();
    });

    it('Deveria retornar true ao salvarMultiplos', () => {
        const sucesso = cache.salvarMultiplos([
            { key: 'teste', val: 'valor' },
            { key: 'segundo teste', val: 'segundo valor' }
        ]);

        expect(sucesso).toBeTruthy();
    });

    it('Deveria retornar o objeto salvo ao buscar', () => {
        expect(cache.buscar('teste')).toBe('valor');
    });

    it('Deveria retornar o undefined ao buscar', () => {
        expect(cache.buscar('nao existe')).toBeUndefined();
    });

    it('Deveria retornar todos os objetos salvos ao buscarTodos', () => {
        expect(cache.buscarTodos()).toHaveProperty('teste');
        expect(cache.buscarTodos()).toHaveProperty('segundo teste');
    });

    it('Deveria retonar true ao procurar uma chave válida', () => {
        expect(cache.checarCache('teste')).toBeTruthy();
    });

    it('Deveria retonar false ao procurar uma chave inválida', () => {
        expect(cache.checarCache('nao existe')).toBeFalsy();
    });
});
