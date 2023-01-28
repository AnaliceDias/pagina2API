/*
  Warnings:

  - You are about to drop the `Formatos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MinhasLeituras` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Status` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MinhasLeituras" DROP CONSTRAINT "MinhasLeituras_formatoId_fkey";

-- DropForeignKey
ALTER TABLE "MinhasLeituras" DROP CONSTRAINT "MinhasLeituras_statusId_fkey";

-- DropTable
DROP TABLE "Formatos";

-- DropTable
DROP TABLE "MinhasLeituras";

-- DropTable
DROP TABLE "Status";

-- CreateTable
CREATE TABLE "formatos" (
    "id" SERIAL NOT NULL,
    "formato" TEXT NOT NULL,

    CONSTRAINT "formatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "autores" (
    "id" SERIAL NOT NULL,
    "autor" TEXT NOT NULL,

    CONSTRAINT "autores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obras" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,

    CONSTRAINT "obras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obrasAutores" (
    "id" SERIAL NOT NULL,
    "obraId" INTEGER NOT NULL,
    "autorId" INTEGER NOT NULL,

    CONSTRAINT "obrasAutores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "minhasLeituras" (
    "id" SERIAL NOT NULL,
    "obraId" INTEGER NOT NULL,
    "edicao" TEXT NOT NULL,
    "numeroDePags" TEXT NOT NULL,
    "ondeParei" TEXT NOT NULL DEFAULT '0',
    "formatoId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,

    CONSTRAINT "minhasLeituras_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "formatos_formato_key" ON "formatos"("formato");

-- CreateIndex
CREATE UNIQUE INDEX "status_status_key" ON "status"("status");

-- CreateIndex
CREATE UNIQUE INDEX "autores_autor_key" ON "autores"("autor");

-- AddForeignKey
ALTER TABLE "obrasAutores" ADD CONSTRAINT "obrasAutores_obraId_fkey" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "obrasAutores" ADD CONSTRAINT "obrasAutores_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "autores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "minhasLeituras" ADD CONSTRAINT "minhasLeituras_formatoId_fkey" FOREIGN KEY ("formatoId") REFERENCES "formatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "minhasLeituras" ADD CONSTRAINT "minhasLeituras_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "minhasLeituras" ADD CONSTRAINT "minhasLeituras_obraId_fkey" FOREIGN KEY ("obraId") REFERENCES "obras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
