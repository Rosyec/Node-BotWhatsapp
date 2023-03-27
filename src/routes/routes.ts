import express, { Router } from 'express';
import { ReceivedMessage, VerifyToken } from '../controllers/whatsappController';

const router: Router = express.Router();

router.get('/', VerifyToken);
router.post('/', ReceivedMessage);

export {
    router
} 