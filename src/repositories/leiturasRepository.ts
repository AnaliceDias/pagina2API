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
            obra: {
                include: {
                    obrasAutores: {
                        select: {
                            autor:{ 
                                select: {
                                    autor: true
                                }
                            }
                        }
                    },
                }
            }
        },        
    });
}

async function buscarLeituraPeloId(leituraId: number) {
    return await db.minhasLeituras.findFirst({
        where: {
            id: leituraId
        },
        include: {
            status: true,
            formato: true,
            obra: {
                include: {
                    obrasAutores: {
                        select: {
                            autor:{ 
                                select: {
                                    autor: true
                                }
                            }
                        }
                    },
                }
            }
        }
    })
}

async function updateLeitura(leituraId: number, pagAtual: string) {
    return await db.minhasLeituras.update({
        where: {
            id: leituraId,
        },
        data: {
            ondeParei: pagAtual,
        }
    })
}

async function updateStatusDaLeitura(leituraId: number, statusId: number){
    return await db.minhasLeituras.update({
        where: {
            id: leituraId,
        },
        data: {
            statusId: statusId,
        }
    })
}

async function buscarStatus() {
    return await db.status.findMany()
}

async function buscarFormatos() {
    return await db.formatos.findMany()
}

export const leiturasRepository = {
    inserirLeitura,
    deletarLeitura,
    buscarLeituras,
    updateLeitura,
    updateStatusDaLeitura,
    buscarLeituraPeloId,
    buscarStatus,
    buscarFormatos,
}