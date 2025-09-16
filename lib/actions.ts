"use server";

import prisma from "@/prisma/prisma";

export async function getProductoBySlug(slug: string){
    const producto = await prisma.producto.findUnique({
        where: {slug},
        include: {
            categoria: true
        }
    });
    if(!producto) return null;
    return producto;
};

export async function getCategorias(){
    const categorias = await prisma.categoria.findMany({});
    return categorias;
}