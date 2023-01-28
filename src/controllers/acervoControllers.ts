import { Request, Response } from "express";
import httpStatus from "http-status";
import { acervoService } from "../services/acervoServices";

export async function listarAutores(req: Request, res: Response){
    try{
        const autores = await acervoService.listarAutores();
        res.send(autores).status(httpStatus.OK);
    }catch(e){
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}