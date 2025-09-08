import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductoBySlug } from "@/lib/actions";
import { formatPrecio } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Params {
    params: Promise<{
        slug: string
    }>
}

export default async function ProductoBySlugPage({params}: Params) {
    const paramValues = await params;
    const slug = paramValues.slug;
    const producto = await getProductoBySlug(slug);
    if(!producto) return notFound();
  return (
    <main className="container mx-auto p-4">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative rounded-lg overflow-hidden h-[200px] md:h-[400px]">
                <Image 
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  priority
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />
            </div>
            <div>
                <h1 className="text-3xl font-bold mb-2">{producto.nombre}</h1>
                <div className="flex items-center gap-2 mb-4">
                    <span className="font-semibold text-lg">{formatPrecio(producto.precio)}</span>
                    <Badge variant="outline">{producto.categoria?.nombre}</Badge>
                </div>
                <Separator className="my-4"/>
                <div className="space-y-2">
                    <h2 className="font-medium">Descripcion</h2>
                    <p>{producto.descripcion}</p>
                </div>
                <Separator className="my-4"/>
                <div className="space-y-2">
                  <h2 className="font-medium">Disponibilidad</h2>
                  <div className="flex items-center gap-2">
                    {producto.inventario > 0 ? (
                      <Badge variant="outline" className="text-green-600">
                        En Stock: {producto.inventario}
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-red-600">
                        No Hay Stock
                      </Badge>
                    ) }
                  </div>
                </div>          
                <Separator className="my-4"/>     
                <div>
                  <Button disabled={producto.inventario === 0} className="w-full">
                    <ShoppingCartIcon className="mr-1 w-4 h-4"/>
                    Agregar al Carro
                  </Button>
                </div>
            </div>
        </CardContent>
      </Card>
    </main>
  );
}