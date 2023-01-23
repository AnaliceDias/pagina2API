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

export const leiturasService = {
    criarLeitura,
    apagarLeitura,
}