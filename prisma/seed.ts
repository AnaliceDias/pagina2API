import db from "../src/config/database";
import { formatoType, statusType } from "../src/Interfaces/leiturasInterfaces";

async function main() {
    const status: statusType[] = [
        {status: "Quero Ler"},
        {status: "Lendo"},
        {status: "Abandonei"},
        {status: "Terminei"},
    ]

    const formatos: formatoType[] = [
        {formato: "Digital"},
        {formato: "Físico"},
    ]

    await db.status.createMany({ data: status });
    await db.formatos.createMany({ data: formatos });

    await db.$disconnect();

}

main();
