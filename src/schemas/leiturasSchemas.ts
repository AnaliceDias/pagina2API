import Joi, { Schema } from "joi";

export const criarLeituraSchema: Schema = Joi.object({
    titulo: Joi.string().required(),
    autor: Joi.string().required(),
    edicao: Joi.string().required(),
    numeroDePag: Joi.string().required(),
    formatoId: Joi.number().required(),
    statusId: Joi.number().required(),
})
