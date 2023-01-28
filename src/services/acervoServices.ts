import { acervoRepository } from "../repositories/acervoRepository"

async function listarAutores(){
    const result = await acervoRepository.buscarAutores();
    return result;
}

export const acervoService = {
    listarAutores,
}