import { Router } from "express";
import { apagarLeitura, atualizarLeitura, atualizarStatusDaLeitura, criarLeitura, listarFormatos, listarLeituraPeloId, listarLeituras, listarStatus } from "../controllers/leiturasControllers";
import validarSchema from "../middlewares/validarSchema";
import { atualizarPagSchema, criarLeituraSchema } from "../schemas/leiturasSchemas";

const leiturasRouter = Router();

leiturasRouter
    .post("/minhas-leituras", validarSchema(criarLeituraSchema), criarLeitura)
    .delete("/minhas-leituras/:leituraId", apagarLeitura)
    .get("/minhas-leituras", listarLeituras)
    .get("/minhas-leituras/:id", listarLeituraPeloId)
    .put("/minhas-leituras/:leituraId/pag-atual", validarSchema(atualizarPagSchema), atualizarLeitura)
    .put("/minhas-leituras/:leituraId/:statusId", atualizarStatusDaLeitura)
    .get("/status", listarStatus)
    .get("/formatos", listarFormatos)

export default leiturasRouter;