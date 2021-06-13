import { SensoresController } from '../controllers/Sensores.controller';
import Router from 'express';

const rotaSensores = Router();

rotaSensores.get('/', SensoresController.get);
rotaSensores.post('/', SensoresController.post);

export default rotaSensores;
