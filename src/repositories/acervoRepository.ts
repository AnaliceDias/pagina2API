import db from "../config/database";

async function buscarAutores(){
    return await db.autores.findMany();
}

async function buscarObras(){
    return await db.obras.findMany({
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
    });
}

export const acervoRepository = {
    buscarAutores,
    buscarObras,
}