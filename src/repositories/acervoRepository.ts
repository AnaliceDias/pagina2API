import db from "../config/database";

async function buscarAutores(){
    return await db.autores.findMany();
}

export const acervoRepository = {
    buscarAutores
}