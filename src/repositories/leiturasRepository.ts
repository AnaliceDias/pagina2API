import db from "../config/database";
import { criarLeituraType } from "../Interfaces/leiturasInterfaces";

export async function inserirLeitura ( data: criarLeituraType ) {
    return await db.minhasLeituras.create({data});
}
