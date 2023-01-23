import { Request, Response } from "express";
import { leiturasService } from "../services/leiturasServices";

export async function criarLeitura (req: Request, res: Response) {
    const data = req.body;
    try{
        await leiturasService.criarLeitura(data);
        res.sendStatus(201);
    }catch(e){
        return res.status(400).send(e);
    }
}
