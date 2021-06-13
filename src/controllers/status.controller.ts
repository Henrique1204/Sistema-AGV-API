import { Request, Response } from 'express';
import { ExceptionAPI } from '../util/ExceptionAPI';
import { CacheServico } from '../servicos/CacheServico';
import { StatusCache } from '../interfaces/dadosCache';

const fomatarDadosCache = (status: boolean, velocidade: string): StatusCache => ({
    status: (status) ? 'ativo' : 'inativo',
    velocidade,
    dataRegistro: new Date().toISOString()
});

export class StatusController {
    public static post = (req: Request, res: Response) => {
        try {
            const { status, velocidade } = req.body;

            if (velocidade === undefined || status === undefined) {
                throw new ExceptionAPI('400');
            }

            if (typeof status !== 'boolean' || typeof velocidade !== 'string') {
                throw new ExceptionAPI('406');
            }

            const cache = CacheServico.getCache();
            const sucesso = cache.salvar('status', fomatarDadosCache(status, velocidade));

            if (!sucesso) throw new ExceptionAPI('502');

            return res.status(201).send({ sucesso, mensagem: 'Dados salvos!' });
        } catch({ message, tipo, mensagem, cod }) {
            if (tipo === 'API') return res.status(Number(cod)).send({ sucesso: false, mensagem });

            res.status(500).send({ mensagem: message });
        }
    };

    public static get = (req: Request, res: Response) => {
        try {
            const cache = CacheServico.getCache();
            const dados = cache.buscar('status');

            if (!dados) throw new ExceptionAPI('502');

            return res.status(200).send(dados);
        } catch({ message, tipo, mensagem, cod }) {
            if (tipo === 'API') return res.status(Number(cod)).send({ sucesso: false, mensagem });

            res.status(500).send({ mensagem: message });
        }
    };
}
