"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { usePathname } from "next/navigation";

const urls = [
  { name: "Início", href: "/v1" },
  { name: "Bate Ponto", href: "/v1/bate-ponto" },
  { name: "Ficha de Registro", href: "/v1/ficha" },
  { name: "Envio de Ausência", href: "/v1/ausencia" },
  { name: "Sistemas Web", href: "/v1/sistemas" },
  { name: "Código Penal", href: "/v1/codigo-penal" },
  { name: "Regulamentos Internos", href: "/v1/regulamentos" },
];

export function DocsBreadcrumbs() {
  const pathname = usePathname();
  const currentUrl = urls.find((u) => u.href === pathname);

  return (
    <div className="px-6 pt-4 pb-2">
      <Breadcrumbs className="border border-primary-400/40 w-fit text-[10px] px-2 py-0.5 rounded-full">
        <BreadcrumbItem href="/v1">Início</BreadcrumbItem>
        {pathname !== "/v1" && currentUrl && (
          <BreadcrumbItem href={currentUrl.href}>{currentUrl.name}</BreadcrumbItem>
        )}
      </Breadcrumbs>
    </div>
  );
}
