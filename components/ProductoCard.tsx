import { Producto } from "@/app/generated/prisma";
import { formatPrecio } from "@/lib/utils";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

export default function ProductoCard({ producto }: { producto: Producto }) {
  return (
    <Link href={`/producto/${producto.slug}`} className="inline-grid">
      <Card className="pt-0 overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{producto.nombre}</CardTitle>
          <CardDescription>{producto.descripcion}</CardDescription>
        </CardHeader>
        <CardFooter>
          <p>{formatPrecio(producto.precio)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
