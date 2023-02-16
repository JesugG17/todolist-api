import { Request, Response, Router } from 'express';
import { Role } from '../models/Role.model';
const router = Router();


router.post('/', async(req: Request, res: Response) => {

    const { role } = req.body;

    await Role.create({ role });

    res.json({ role });
});


export default router