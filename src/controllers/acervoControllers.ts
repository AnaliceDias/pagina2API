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

export async function listarObras(req: Request, res: Response){
    try{
        const obras = await acervoService.listarObras();
        res.status(httpStatus.OK).send(obras);
    }catch(e){
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}