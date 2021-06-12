import express from 'express';
import cors from 'cors';
import { CacheServico } from './servicos/CacheServico';

export class App {
    constructor(
        private _express = express(),
        private porta = 8000
    ) {
        this.addMiddlewares();
        this.listen();
        this.iniciarCache();
    }

    private addMiddlewares = (): void => {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));

        this.express.use(cors({ origin: true, credentials: true }));
    };

    private listen = (): void => {
        this.express.listen(this.porta, () => {
            console.log(`Servidor rodando na porta ${this.porta}`);
        });
    };

    private iniciarCache = (): void => {
        const cache = CacheServico.getCache();
        const cacheInicial = [
            {
                key: 'status',
                val: {
                    status: 'desconhecido',
                    velocidade: '0m/s',
                    dataRegistro: new Date().toISOString()
                }
            },
            {
                key: 'sensores',
                val: []
            }
        ];

        cache.salvarMultiplos(cacheInicial);
    };

    public get express(): express.Application {
        return this._express;
    }
}
