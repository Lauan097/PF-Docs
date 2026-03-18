"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { usePathname } from "next/navigation";

const urls = [
  { name: "Início", href: "/docs" },
  { name: "Bate Ponto", href: "/docs/bate-ponto" },
  { name: "Ficha de Registro", href: "/docs/ficha" },
  { name: "Envio de Ausência", href: "/docs/ausencia" },
  { name: "Sistemas Web", href: "/docs/sistemas" },
  { name: "Código Penal", href: "/docs/codigo-penal" },
  { name: "Regulamentos Internos", href: "/docs/regulamentos" },
];

export function DocsBreadcrumbs() {
  const pathname = usePathname();
  const currentUrl = urls.find((u) => u.href === pathname);

  return (
    <div className="px-6 pt-4 pb-2">
      <Breadcrumbs className="border border-primary-400/40 w-fit text-[10px] px-2 py-0.5 rounded-full">
        <BreadcrumbItem href="/docs">Início</BreadcrumbItem>
        {pathname !== "/docs" && currentUrl && (
          <BreadcrumbItem href={currentUrl.href}>{currentUrl.name}</BreadcrumbItem>
        )}
      </Breadcrumbs>
    </div>
  );
}
