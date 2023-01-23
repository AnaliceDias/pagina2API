import { Router } from "express";
import { apagarLeitura, criarLeitura } from "../controllers/leiturasControllers";
import validarSchema from "../middlewares/validarSchema";
import { criarLeituraSchema } from "../schemas/leiturasSchemas";

const leiturasRouter = Router();

leiturasRouter
    .post("/minhas-leituras", validarSchema(criarLeituraSchema), criarLeitura)
    .delete("/minhas-leituras/:leituraId", apagarLeitura)

export default leiturasRouter;