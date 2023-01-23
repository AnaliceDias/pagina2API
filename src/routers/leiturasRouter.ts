import { Router } from "express";
import { apagarLeitura, atualizarLeitura, criarLeitura, listarLeituras } from "../controllers/leiturasControllers";
import validarSchema from "../middlewares/validarSchema";
import { atualizarPagSchema, criarLeituraSchema } from "../schemas/leiturasSchemas";

const leiturasRouter = Router();

leiturasRouter
    .post("/minhas-leituras", validarSchema(criarLeituraSchema), criarLeitura)
    .delete("/minhas-leituras/:leituraId", apagarLeitura)
    .get("/minhas-leituras", listarLeituras)
    .put("/minhas-leituras/:leituraId/onde-parei", validarSchema(atualizarPagSchema), atualizarLeitura)

export default leiturasRouter;