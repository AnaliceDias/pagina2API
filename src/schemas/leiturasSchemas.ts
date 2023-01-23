import Joi, { Schema } from "joi";

export const criarLeituraSchema: Schema = Joi.object({
    titulo: Joi.string().required(),
    autor: Joi.string().required(),
    edicao: Joi.string().required(),
    numeroDePags: Joi.string().required(),
    formatoId: Joi.number().required(),
    statusId: Joi.number().required(),
})

export const atualizarPagSchema: Schema = Joi.object({
    pagAtual: Joi.string().required(),
})