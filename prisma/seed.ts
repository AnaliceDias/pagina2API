import db from "../src/config/database";
import { formatoType, statusType } from "../src/Interfaces/leiturasInterfaces";

async function main() {
    const status = [
        {status: "Quero Ler"},
        {status: "Lendo"},
        {status: "Abandonei"},
        {status: "Terminei"},
    ]

    const formatos = [
        {formato: "Digital"},
        {formato: "Físico"},
    ]

    const autores = [
        {autor: "C.S. Lewis"},
        {autor: "John Green"},
        {autor: "David Levithan"},
        {autor: "Ilana Casoy"},
        {autor: "Raphael Montes"},
        {autor: "Mary Shelley"},
    ]

    const obras = [
        {titulo: "O sobrinho do mago"},
        {titulo: "Will & Will"},
        {titulo: "A culpa é das estrelas"},
        {titulo: "Bom dia, Verônica"},
        {titulo: "Frankenstein"},
    ]

    const obrasAutores = [
        {
            obraId: 1,
            autorId: 1,
        },
        {
            obraId: 2,
            autorId: 2,
        },
        {
            obraId: 2,
            autorId: 3,
        },
        {
            obraId: 3,
            autorId: 2,
        },
        {
            obraId: 4,
            autorId: 4,
        },
        {
            obraId: 4,
            autorId: 5,
        },
        {
            obraId: 5,
            autorId: 6,
        },
    ]

    await db.status.createMany({ data: status });
    await db.formatos.createMany({ data: formatos });
    await db.autores.createMany({data: autores});
    await db.obras.createMany({data: obras});
    await db.obrasAutores.createMany({data:obrasAutores});

}

main().then(() => {
console.log("DB populado com sucesso");
})
.catch((e) => {
    console.log(e);
})
.finally(() => {
    db.$disconnect();
});
