import NodeCache from "node-cache";

export class CacheServico {
    private static cacheServico: CacheServico;

    private constructor(private cache = new NodeCache()) {}

    public salvar = <T>(chave: string, valor: T): boolean => this.cache.set(chave, valor, 0);

    public salvarMultiplos = (dadosCache: any[]): boolean => {
        const cacheInicial = dadosCache.map((dado) => ({ ...dado, tll: 0 }));
        return this.cache.mset(cacheInicial);
    };

    public buscar = <T>(chave: string): T => this.cache.get(chave);

    public buscarTodos = (): unknown => {
        const chaves = this.cache.keys();
        return this.cache.mget(chaves);
    };

    public checarCache = (chave: string): boolean => this.cache.has(chave);

    public static getCache = (): CacheServico => {
        if (CacheServico.cacheServico) return CacheServico.cacheServico;

        CacheServico.cacheServico = new CacheServico();
        return CacheServico.cacheServico;
    }
}
