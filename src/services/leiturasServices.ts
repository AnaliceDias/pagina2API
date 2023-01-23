import { criarLeituraType } from "../Interfaces/leiturasInterfaces";
import { deletarLeitura, inserirLeitura } from "../repositories/leiturasRepository";

async function criarLeitura (data: criarLeituraType) {
    const result = await inserirLeitura(data);
    return result;
}

export const leiturasService = {
    criarLeitura,
}