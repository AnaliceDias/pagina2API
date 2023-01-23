import { criarLeituraType } from "../Interfaces/leiturasInterfaces";
import { leiturasRepository } from "../repositories/leiturasRepository";

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
        leituras.push({
            id: leitura.id,
            titulo: leitura.titulo,
            autor: leitura.autor,
            edicao: leitura.edicao,
            numeroDePag: leitura.numeroDePag,
            ondeParei: leitura.ondeParei,
            formato: leitura.formato.formato,
            status: leitura.status.status
        })
    })

    return leituras;
}

export const leiturasService = {
    criarLeitura,
    apagarLeitura,
    listarLeituras,
}