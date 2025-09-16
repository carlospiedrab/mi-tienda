import { getCategorias } from "@/lib/actions";
import Link from "next/link";
import { Button } from "./button";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import MovilNavBar from "./MovilNavBar";

export default async function NavBar() {
    const categorias = await getCategorias();
  return (
    <div className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div>
            <div className="flex items-center gap-6">
                <Link
                 href="/"
                 className="text-2xl font-bold hidden md:block"
                >
                    Mi Tienda
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    {categorias.map((categoria) => (
                        <Link
                          key={categoria.id}
                          href={`/categoria/${categoria.slug}`}
                          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {categoria.nombre}
                        </Link>
                    ))}
                </nav>
                {/* Movil NavBar */}
                <MovilNavBar categorias={categorias}/>
            </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/buscar">
              <SearchIcon className="h-5 w-5"/>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/carro">
              <ShoppingCartIcon className="h-5 w-5"/>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}