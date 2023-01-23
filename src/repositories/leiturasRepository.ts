import db from "../config/database";
import { criarLeituraType } from "../Interfaces/leiturasInterfaces";

async function inserirLeitura ( data: criarLeituraType ) {
    return await db.minhasLeituras.create({data});
}

async function deletarLeitura (leituraId: number) {
    return await db.minhasLeituras.delete({
        where: {
            id: leituraId
        }
    })
}

async function buscarLeituras () {
    return await db.minhasLeituras.findMany({
        include: {
            status: true,
            formato: true,
        }
    });
}

export const leiturasRepository = {
    inserirLeitura,
    deletarLeitura,
    buscarLeituras,
}