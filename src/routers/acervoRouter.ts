import { Router } from "express";
import { listarAutores } from "../controllers/acervoControllers";

const acervoRouter = Router();

acervoRouter
    .get("/autores", listarAutores)

export default acervoRouter;