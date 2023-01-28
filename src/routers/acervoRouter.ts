import { Router } from "express";
import { listarAutores, listarObras } from "../controllers/acervoControllers";

const acervoRouter = Router();

acervoRouter
    .get("/autores", listarAutores)
    .get("/obras", listarObras);

export default acervoRouter;