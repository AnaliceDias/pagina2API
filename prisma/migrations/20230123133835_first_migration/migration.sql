-- CreateTable
CREATE TABLE "Formatos" (
    "id" SERIAL NOT NULL,
    "formato" TEXT NOT NULL,

    CONSTRAINT "Formatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MinhasLeituras" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "edicao" TEXT NOT NULL,
    "numeroDePag" TEXT NOT NULL DEFAULT '0',
    "ondeParei" TEXT NOT NULL DEFAULT '0',
    "formatoId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,

    CONSTRAINT "MinhasLeituras_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Formatos_formato_key" ON "Formatos"("formato");

-- CreateIndex
CREATE UNIQUE INDEX "Status_status_key" ON "Status"("status");

-- AddForeignKey
ALTER TABLE "MinhasLeituras" ADD CONSTRAINT "MinhasLeituras_formatoId_fkey" FOREIGN KEY ("formatoId") REFERENCES "Formatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MinhasLeituras" ADD CONSTRAINT "MinhasLeituras_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
