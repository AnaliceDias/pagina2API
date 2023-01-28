import { criarLeituraType } from "../Interfaces/leiturasInterfaces";
import { leiturasRepository } from "../repositories/leiturasRepository";
import httpStatus from "http-status";

async function criarLeitura (data: criarLeituraType) {
    const result = await leiturasRepository.inserirLeitura(data);
    return result;
}

async function apagarLeitura (leituraId: number) {
    const result = await leiturasRepository.deletarLeitura(leituraId);
    return result

}

async function listarLeituras (){
    const result = await leiturasRepository.buscarLeituras();
    let leituras = [];

    result.map((leitura) => {
        let listaAutores = [];
        leitura.obra.obrasAutores.map((autores) => {
            listaAutores.push(autores.autor.autor)
        })
        leituras.push({
            id: leitura.id,
            titulo: leitura.obra.titulo,
            autores: [...listaAutores],
            edicao: leitura.edicao,
            numeroDePags: leitura.numeroDePags,
            ondeParei: leitura.ondeParei,
            formato: leitura.formato.formato,
            status: leitura.status.status
        })
    })

    return leituras;
}

async function listarLeituraPeloId (leituraId: number){
    const result = await leiturasRepository.buscarLeituraPeloId(leituraId);

    if(!result) {
        throw httpStatus.NOT_FOUND;
    }

    let autores = [];

    result.obra.obrasAutores.map((autor) => {
        autores.push(autor.autor.autor);
    })
    let leitura = {
        id: result.id,
        titulo: result.obra.titulo,
         autores: [...autores],
        edicao: result.edicao,
        numeroDePags: result.numeroDePags,
        ondeParei: result.ondeParei,
        formato: result.formato.formato,
        status: result.status.status
    };

    return leitura;
}

async function atualizarLeitura(leituraId: number, pagAtual: string) {
    const result = await leiturasRepository.updateLeitura(leituraId, pagAtual);
    return result;
}

async function atualizarStatusDaLeitura(leituraId: number, statusId: number){
    const result = await leiturasRepository.updateStatusDaLeitura(leituraId, statusId);
    return result;
}

async function listarStatus() {
    const result = await leiturasRepository.buscarStatus();
    return result;
}

async function listarFormatos() {
    const result = await leiturasRepository.buscarFormatos();
    return result;
}

export const leiturasService = {
    criarLeitura,
    apagarLeitura,
    listarLeituras,
    atualizarLeitura,
    atualizarStatusDaLeitura,
    listarLeituraPeloId,
    listarStatus,
    listarFormatos,
}