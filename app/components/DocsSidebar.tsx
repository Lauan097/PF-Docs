"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Clock, FileText, CalendarOff, Globe, Search, Shield, Scale } from "lucide-react";
import { LuClock, LuFileText, LuGlobe, LuScale, LuBookOpenText, LuHouse } from "react-icons/lu";
import { RiZzzFill } from "react-icons/ri";

export function DocsSidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Visão Geral", href: "/docs", icon: LuHouse },
    { name: "Bate Ponto", href: "/docs/bate-ponto", icon: LuClock },
    { name: "Ficha de Registro", href: "/docs/ficha", icon: LuFileText },
    { name: "Envio de Ausência", href: "/docs/ausencia", icon: RiZzzFill },
    { name: "Sistemas Web", href: "/docs/sistemas", icon: LuGlobe },
    { name: "Código Penal", href: "/docs/codigo-penal", icon: LuScale },
    { name: "Regulamentos Internos", href: "/docs/regulamentos", icon: LuBookOpenText },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    },
  };

  return (
    <motion.nav 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-2 w-full p-2 pt-4"
    >
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;

        return (
          <motion.div key={link.href} variants={itemVariants}>
            <Link
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors relative group ${
                isActive ? "text-primary-600" : "text-default-500 hover:text-default-900"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/20 rounded-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {!isActive && (
                <div className="absolute inset-0 bg-default-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              <Icon size={18} className="relative z-10" />
              <span className="text-sm font-medium relative z-10">{link.name}</span>
            </Link>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}