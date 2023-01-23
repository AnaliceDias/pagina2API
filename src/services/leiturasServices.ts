import { criarLeituraType } from "../Interfaces/leiturasInterfaces";
import { deletarLeitura, inserirLeitura } from "../repositories/leiturasRepository";

async function criarLeitura (data: criarLeituraType) {
    const result = await inserirLeitura(data);
    return result;
}

async function apagarLeitura (leituraId: number) {
    const result = await deletarLeitura(leituraId);
    //gerar erro
    return result

}

export const leiturasService = {
    criarLeitura,
    apagarLeitura,
}