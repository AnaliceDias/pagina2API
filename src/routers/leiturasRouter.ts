import { Router } from "express";
import { apagarLeitura, atualizarLeitura, criarLeitura, listarLeituraPeloId, listarLeituras } from "../controllers/leiturasControllers";
import validarSchema from "../middlewares/validarSchema";
import { atualizarPagSchema, criarLeituraSchema } from "../schemas/leiturasSchemas";

const leiturasRouter = Router();

leiturasRouter
    .post("/minhas-leituras", validarSchema(criarLeituraSchema), criarLeitura)
    .delete("/minhas-leituras/:leituraId", apagarLeitura)
    .get("/minhas-leituras", listarLeituras)
    .get("/minhas-leituras/:id", listarLeituraPeloId)
    .put("/minhas-leituras/:leituraId/pag-atual", validarSchema(atualizarPagSchema), atualizarLeitura)

export default leiturasRouter;