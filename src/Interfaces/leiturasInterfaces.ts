import { status , formatos } from "@prisma/client";

export type statusType = Omit< status, "id" >
export type formatoType = Omit< formatos, "id" >
export type criarLeituraType = {
    obraId: number,
    edicao: string,
    numeroDePags: string,
    formatoId: number,
    statusId: number
}