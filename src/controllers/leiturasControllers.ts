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

export async function apagarLeitura (req: Request, res: Response) {
    const leituraId = +req.params.leituraId;
    try{
        const result = await leiturasService.apagarLeitura(leituraId);
        res.status(200).send("Leitura excluída com sucesso");
    }catch(e){
        return res.status(404).send(e);
    }
}

export async function listarLeituras(req: Request, res: Response) {
    try{
        const leituras = await leiturasService.listarLeituras();
        res.status(200).send(leituras);
    }catch(e){
        return res.status(500).send(e);
    }
}

export async function atualizarLeitura(req: Request, res: Response) {
    const { pagAtual } = req.body;
    const leituraId = +req.params.leituraId;
    try{
        const result = await leiturasService.atualizarLeitura(leituraId, pagAtual);
        res.status(200).send(result);
    }catch(e){
        return res.status(404).send(e);
    }
}

export async function listarLeituraPeloId(req: Request, res: Response) {
    const leituraId = +req.params.id;
    try{
        const leitura = await leiturasService.listarLeituraPeloId(leituraId);
        res.status(200).send(leitura);
    }catch(e){
        return res.status(500).send(e);
    }
}