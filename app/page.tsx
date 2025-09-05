import ProductoCard from "@/components/ProductoCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import prisma from "@/prisma/prisma";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const pageSize = 3;
  const skip = (page - 1) * pageSize;

  const [productos, total] = await Promise.all([
    prisma.producto.findMany({
      skip,
      take: pageSize,
    }),
    prisma.producto.count()
  ]);
  
  const totalPages = Math.ceil(total / pageSize);

  //await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <p>Mostrando {productos.length} Productos</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {productos.map((producto) => (
          <ProductoCard producto={producto} key={producto.id} />
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`?page=${page - 1}`}></PaginationPrevious>
          </PaginationItem>

         {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href={`?page=${index + 1}`}
              className={page === index +1 ? "active" : ""}
            >{index +1}
            </PaginationLink>
          </PaginationItem>
         ))}         
          <PaginationItem>
            <PaginationNext href={`?page=${page + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
