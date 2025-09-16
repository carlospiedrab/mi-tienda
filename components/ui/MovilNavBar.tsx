import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import Link from "next/link";
import { Categoria } from "@/app/generated/prisma";

export default function MovilNavBar({categorias}: {categorias: Categoria[]}) {
  return (
   <Sheet>
    <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
        </Button>
    </SheetTrigger>
    <SheetContent side="left">
        <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 p-4">
            <SheetClose asChild>
                <Link href="/">Mi Tienda</Link>
            </SheetClose>

            <div>
                {categorias.map((categoria) => (
                    <SheetClose asChild key={categoria.id}>
                        <Link href={`/categoria/${categoria.slug}`}
                        className="block py-2 text-sm font-medium">
                            {categoria.nombre}
                        </Link>
                    </SheetClose>
                ))}
            </div>
        </nav>
    </SheetContent>
   </Sheet>
  );
}