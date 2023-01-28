import { Router } from "express";
import acervoRouter from "./acervoRouter";
import leiturasRouter from "./leiturasRouter";

const router = Router();

router.use(leiturasRouter);
router.use(acervoRouter);

export default router;