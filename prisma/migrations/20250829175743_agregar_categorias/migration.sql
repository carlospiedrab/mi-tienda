/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Producto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoriaId` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagen` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Producto" ADD COLUMN     "categoriaId" TEXT NOT NULL,
ADD COLUMN     "imagen" TEXT NOT NULL,
ADD COLUMN     "precio" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Categoria" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_slug_key" ON "public"."Categoria"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Producto_slug_key" ON "public"."Producto"("slug");

-- AddForeignKey
ALTER TABLE "public"."Producto" ADD CONSTRAINT "Producto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "public"."Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
