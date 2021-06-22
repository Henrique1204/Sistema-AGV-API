import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from './swagger.json';
import { CacheServico } from './servicos/CacheServico';
import cacheInicial from './mockCacheInicial.json';
import rotaStatus from './rotas/status';
import rotaSensores from './rotas/sensores';

export class App {
    constructor(
        private _express = express(),
        private porta = 8000
    ) {
        this.addMiddlewares();
        this.listen();
        this.iniciarCache();
        this.criarRotas();
    }

    private addMiddlewares = (): void => {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));

        this.express.use(cors({ origin: true, credentials: true }));

        this.express.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
    };

    private listen = (): void => {
        this.express.listen(this.porta, () => {
            console.log(`Servidor rodando na porta ${this.porta}`);
        });
    };

    private iniciarCache = (): void => {
        const cache = CacheServico.getCache();
        cache.salvarMultiplos(cacheInicial.dados);
    };

    private criarRotas = (): void => {
        this.express.use('/status', rotaStatus);
        this.express.use('/sensores', rotaSensores);
    };

    public get express(): express.Application {
        return this._express;
    }
}
