import { acervoRepository } from "../repositories/acervoRepository"

async function listarAutores(){
    const result = await acervoRepository.buscarAutores();
    return result;
}

async function listarObras() {
    const result = await acervoRepository.buscarObras();
    let leituras = [];

    result.map((leitura) => {
        let listaAutores = [];
        leitura.obrasAutores.map((autores) => {
            listaAutores.push(autores.autor.autor)
        })
        leituras.push({
            id: leitura.id,
            titulo: leitura.titulo,
            autores: [...listaAutores],
        })
    })

    return leituras;
}

export const acervoService = {
    listarAutores,
    listarObras,
}