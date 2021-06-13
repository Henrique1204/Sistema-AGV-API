import { App } from '../App';
import request from 'supertest';

const Server = new App();

describe('Testando Rota Status', () => {
    afterEach(() => jest.clearAllMocks());

    it('Deveria buscar dados do status e código 200', async () => {
        const sut = Server.express;
        const res = await request(sut).get('/status');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('velocidade');
        expect(res.body).toHaveProperty('dataRegistro');
    });

    it('Deveria retornar sucesso como true e código 201', async () => {
        const sut = Server.express;

        const res = await request(sut).post('/status').send({
            status: true,
            velocidade: '0m/s'
        });

        expect(res.statusCode).toEqual(201);
        expect(res.body.sucesso).toBeTruthy();
    });

    it('Deveria retornar sucesso como false e código 400', async () => {
        const sut = Server.express;

        const res = await request(sut).post('/status').send({
            velocidade: '0m/s'
        });

        expect(res.statusCode).toEqual(400);
        expect(res.body.sucesso).toBeFalsy();
    });

    it('Deveria retornar sucesso como false e código 406', async () => {
        const sut = Server.express;

        const res = await request(sut).post('/status').send({
            status: 'ligado',
            velocidade: 0
        });

        expect(res.statusCode).toEqual(406);
        expect(res.body.sucesso).toBeFalsy();
    });
});
