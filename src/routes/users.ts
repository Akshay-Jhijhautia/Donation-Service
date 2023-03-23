import { Router } from "express";
import {getUsers,createdonations,redonation,checkdonations} from '../controllers/users'; 
import asyncMiddleware from "../../middleware/async";
const router = Router();

router.get('/getusers', getUsers);
router.post('/receivedonation', createdonations);
router.put('/redonation/:id', redonation);
router.get('/checkdonations/:id', checkdonations);

export default router;