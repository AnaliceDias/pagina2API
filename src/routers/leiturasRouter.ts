import { Router } from "express";
import { apagarLeitura, criarLeitura, listarLeituras } from "../controllers/leiturasControllers";
import validarSchema from "../middlewares/validarSchema";
import { criarLeituraSchema } from "../schemas/leiturasSchemas";

const leiturasRouter = Router();

leiturasRouter
    .post("/minhas-leituras", validarSchema(criarLeituraSchema), criarLeitura)
    .delete("/minhas-leituras/:leituraId", apagarLeitura)
    .get("/minhas-leituras", listarLeituras)

export default leiturasRouter;