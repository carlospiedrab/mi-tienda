import { PrismaClient, Producto } from "@/app/generated/prisma";


console.log("Alimentando la base de datos.....");

const prisma = new PrismaClient();

async function main(){
    await prisma.producto.deleteMany();
    await prisma.categoria.deleteMany();
    // Crear Categorias
    const zapatos = await prisma.categoria.create({
        data: {
            nombre: "Zapatos",
            slug: "zapatos"
        }
    });
    const camisetas = await prisma.categoria.create({
        data: {
            nombre: "Camisetas",
            slug: "camisetas"
        }
    });
    const mochilas = await prisma.categoria.create({
        data: {
            nombre: "Mochilas",
            slug: "mochilas"
        }
    });

    // Insertar Productos
    const productos: Producto[] = [
    {
      id: "1",
      nombre: "Nike Free",
      precio: 200.0,
      descripcion:
        "Su diseño se caracteriza por una suela muy flexible con surcos profundos para permitir que la suela se doble y flexione con el pie, mientras que la forma del zapato sigue la anatomía del pie para una sensación más natural.",
      categoriaId: zapatos.id,
      imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      slug: "nike-free",
      inventario: 15
    },
    {
      id: "2",
      nombre: "Nike Athletic",
      precio: 220.0,
      descripcion:
        "Los zapatos deportivos Nike se caracterizan por su enfoque en el rendimiento y el estilo atlético, integrando tecnologías innovadoras como la amortiguació.",
      categoriaId: zapatos.id,
      imagen: "https://images.unsplash.com/photo-1599571720388-1a7b15206466",
      slug: "nike-athletic",
      inventario: 14
    },
    {
      id: "3",
      nombre: "Camiseta Estampada Mujer",
      precio: 40.0,
      descripcion:
        "Las camisetas personalizadas son una excelente manera de crear un look consistente, elegante y profesional para el personal de su empresa o para uso personal.",
      categoriaId: camisetas.id,
      imagen: "https://images.unsplash.com/photo-1554568218-0f1715e72254",
      slug: "camiseta-estampada-mujer",
      inventario: 30
    },
    {
      id: "4",
      nombre: "Camiseta Estampada Hombre",
      precio: 30.0,
      descripcion:
        "Las camisetas personalizadas son una excelente manera de crear un look consistente, elegante y profesional para el personal de su empresa o para uso personal.",
      categoriaId: camisetas.id,
      imagen: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad",
      slug: "camiseta-estampada-hombre",
      inventario: 40
    },
    {
      id: "5",
      nombre: "Mochila Azul",
      precio: 70.0,
      descripcion:
        "Una mochila azul es un bolso con correas para colgar en la espalda, diseñado para transportar objetos de forma organizada.",
      categoriaId: mochilas.id,
      imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      slug: "mochila-azul",
      inventario: 0
    },
    ];

    for(const producto of productos){
        await prisma.producto.create({
            data: producto
        });
    }

}

main()
    .then(async () => {
        console.log("Proceso Completo");
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })