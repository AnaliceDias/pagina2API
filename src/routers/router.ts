import { Router } from "express";
import leiturasRouter from "./leiturasRouter";

const router = Router();

router.use(leiturasRouter)

export default router;