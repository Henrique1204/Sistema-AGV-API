import { SensoresController } from '../controllers/Sensores';
import Router from 'express';

const rotaSensores = Router();

rotaSensores.get('/', SensoresController.get);
rotaSensores.post('/', SensoresController.post);

export default rotaSensores;
