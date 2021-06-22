import { Request, Response } from 'express';
import { ExceptionAPI } from '../util/ExceptionAPI';
import { StatusRepositorie } from '../repositories/Status';

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

            const sucesso = StatusRepositorie.salvarStatus({ status, velocidade });
            if (!sucesso) throw new ExceptionAPI('502');

            return res.status(201).send({ sucesso, mensagem: 'Dados salvos!' });
        } catch({ message, tipo, mensagem, cod }) {
            if (tipo === 'API') return res.status(Number(cod)).send({ sucesso: false, mensagem });

            res.status(500).send({ mensagem: message });
        }
    };

    public static get = (req: Request, res: Response) => {
        try {
            const dados = StatusRepositorie.buscarStatus();

            if (!dados) throw new ExceptionAPI('502');

            return res.status(200).send(dados);
        } catch({ message, tipo, mensagem, cod }) {
            if (tipo === 'API') return res.status(Number(cod)).send({ sucesso: false, mensagem });

            res.status(500).send({ mensagem: message });
        }
    };
}
