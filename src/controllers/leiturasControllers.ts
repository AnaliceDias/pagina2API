import { Request, Response } from "express";
import httpStatus from "http-status";
import { leiturasService } from "../services/leiturasServices";

export async function criarLeitura (req: Request, res: Response) {
    const data = req.body;
    try{
        await leiturasService.criarLeitura(data);
        res.sendStatus(httpStatus.CREATED);
    }catch(e){
        return res.status(httpStatus.BAD_REQUEST).send(e);
    }
}

export async function apagarLeitura (req: Request, res: Response) {
    const leituraId = +req.params.leituraId;
    try{
        const result = await leiturasService.apagarLeitura(leituraId);
        res.status(httpStatus.OK).send("Leitura excluída com sucesso");
    }catch(e){
        return res.status(httpStatus.NOT_FOUND).send(e);
    }
}

export async function listarLeituras(req: Request, res: Response) {
    try{
        const leituras = await leiturasService.listarLeituras();
        res.status(httpStatus.OK).send(leituras);
    }catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
}

export async function atualizarLeitura(req: Request, res: Response) {
    const { pagAtual } = req.body;
    const leituraId = +req.params.leituraId;
    try{
        const result = await leiturasService.atualizarLeitura(leituraId, pagAtual);
        res.status(httpStatus.OK).send(result);
    }catch(e){
        return res.status(httpStatus.NOT_FOUND).send(e);
    }
}

export async function atualizarStatusDaLeitura(req: Request, res: Response){
    const leituraId = +req.params.leituraId;
    const statusId = +req.params.statusId;
    try{
        const result = await leiturasService.atualizarStatusDaLeitura(leituraId, statusId);
        res.status(httpStatus.OK).send(result);
    }catch(e){
        return res.status(httpStatus.NOT_FOUND).send(e);
    }
}

export async function listarLeituraPeloId(req: Request, res: Response) {
    const leituraId = +req.params.id;
    try{
        const leitura = await leiturasService.listarLeituraPeloId(leituraId);
        res.status(httpStatus.OK).send(leitura);
    }catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
}

export async function listarStatus(req: Request, res: Response){
    try{
        const status = await leiturasService.listarStatus();
        res.status(httpStatus.OK).send(status);
    }catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
}

export async function listarFormatos(req: Request, res: Response){
    try{
        const formatos = await leiturasService.listarFormatos();
        res.status(httpStatus.OK).send(formatos);
    }catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
}