import { Request, Response } from "express";
import { acervoService } from "../services/acervoServices";

export async function listarAutores(req: Request, res: Response){
    try{
        const autores = await acervoService.listarAutores();
        res.send(autores).status(200);
    }catch(e){
        res.sendStatus(500);
    }
}