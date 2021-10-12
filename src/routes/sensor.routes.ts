import express from 'express';
import { getAll } from '../controllers/sensor.controller';

/** Initialize router */
const router = express.Router();

/** GET Routes */
router.get('/history', getAll);

export default router;
