/*
  Warnings:

  - You are about to drop the column `numeroDePag` on the `MinhasLeituras` table. All the data in the column will be lost.
  - Added the required column `numeroDePags` to the `MinhasLeituras` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MinhasLeituras" DROP COLUMN "numeroDePag",
ADD COLUMN     "numeroDePags" TEXT NOT NULL;
