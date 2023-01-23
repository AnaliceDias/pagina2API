import Joi, { Schema } from "joi";

export const criarLeituraSchema: Schema = Joi.object({
    titulo: Joi.string(),
    autor: Joi.string(),
    edicao: Joi.string(),
    numeroDePag: Joi.string(),
    formatoId: Joi.number(),
    statusId: Joi.number(),
})