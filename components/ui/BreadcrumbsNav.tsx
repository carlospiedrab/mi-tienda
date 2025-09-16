import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "./breadcrumb";
import { HomeIcon } from "lucide-react";
import React from "react";

interface BreadcrumbsProps {
    items: {
        label: string;
        href:  string;
    } []
}

export default function BreadcrumbsNav({items} : BreadcrumbsProps) {
  return (
    <Breadcrumb>
       <BreadcrumbList className="mb-6">
        <BreadcrumbItem>
           <Link href="/">
            <HomeIcon className="h-4 w-4" />
           </Link>
        </BreadcrumbItem>  

        {items.map((item, index) => (
            <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbItem>
            </React.Fragment>
        ))}

       </BreadcrumbList>
    </Breadcrumb>
  );
}