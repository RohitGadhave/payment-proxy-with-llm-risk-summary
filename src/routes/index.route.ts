import { Router } from 'express';
import monitorRoutes from './monitor.routes';

const router = Router();
router.use('/monitor', monitorRoutes);

export default router;
export { router as apiRouter };
