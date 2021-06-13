import { Request, Response } from 'express';
import { ExceptionAPI } from '../util/ExceptionAPI';
import { SensoresRepositorie } from '../repositories/Sensores.repositorie';

export class SensoresController {
    public static post = (req: Request, res: Response) => {
        try {
            const { nome, status, condicao } = req.body;

            if (nome === undefined || status === undefined || condicao === undefined) {
                throw new ExceptionAPI('400');
            }

            if (typeof nome !== 'string' || typeof status !== 'boolean' || typeof condicao !== 'boolean') {
                throw new ExceptionAPI('406');
            }

            const sucesso = SensoresRepositorie.salvarSensores({ nome, status, condicao });
            if (!sucesso) throw new ExceptionAPI('502');

            return res.status(201).send({ sucesso, mensagem: 'Dados salvos!' });
        } catch({ message, tipo, mensagem, cod }) {
            if (tipo === 'API') return res.status(Number(cod)).send({ sucesso: false, mensagem });

            res.status(500).send({ mensagem: message });
        }
    };

    public static get = (req: Request, res: Response) => {
        try {
            const dados = SensoresRepositorie.buscarSensores();

            if (!dados) throw new ExceptionAPI('502');

            return res.status(200).send(dados);
        } catch({ message, tipo, mensagem, cod }) {
            if (tipo === 'API') return res.status(Number(cod)).send({ sucesso: false, mensagem });

            res.status(500).send({ mensagem: message });
        }
    };
}
