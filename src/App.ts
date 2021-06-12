import express from 'express';
import cors from 'cors';

export class App {
    private _express: express.Application;
    private porta = 8000;

    constructor() {
        this._express = express();
        this.addMiddlewares();
        this.listen();
    }

    private addMiddlewares = () => {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));

        this.express.use(cors({ origin: true, credentials: true }));
    }

    private listen = (): void => {
        this.express.listen(this.porta, () => {
            console.log(`Servidor rodando na porta ${this.porta}`);
        });
    };

    public get express(): express.Application {
        return this._express;
    }
}
