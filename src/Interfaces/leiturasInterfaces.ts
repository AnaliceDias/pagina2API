import { Status , Formatos } from "@prisma/client";

export type statusType = Omit< Status, "id" >
export type formatoType = Omit< Formatos, "id" >
export type criarLeituraType = {
    titulo: string,
    autor: string,
    edicao: string,
    numeroDePags: string,
    formatoId: number,
    statusId: number
}