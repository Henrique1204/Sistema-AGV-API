import { StatusController } from '@controllers/status.controller';
import Router from 'express';

const rotaStatus = Router();

rotaStatus.get('/', StatusController.get);
rotaStatus.post('/', StatusController.post);

export default rotaStatus;
