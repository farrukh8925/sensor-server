import express from 'express';
import { login, register } from '../controllers/authentication.controller';

/** Initialize router */
const router = express.Router();

/** POST Routes */
router.post('/login', login);
router.post('/signup', register);

export default router;
