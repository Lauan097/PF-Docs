"use client";

import { motion } from "framer-motion";
import { LuClock, LuFileText, LuGlobe, LuScale, LuBookOpenText } from "react-icons/lu";
import { RiZzzFill } from "react-icons/ri";
import { title, subtitle } from "@/components/primitives";
import { Divider } from "@heroui/divider";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="flex flex-col items-center justify-center py-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className={title({ size: "lg", className: "flex items-center justify-center gap-2 font-black" })}>
          <span className="text-primary">Polícia Federal</span>
          <Divider orientation="vertical" className="h-14 mx-4" />
          Docs
        </h1>
        <p className={subtitle({ className: "max-w-xl mx-auto mt-4 text-default-500" })}>
          Central de suporte e procedimentos operacionais da Polícia Federal. 
          Simplicidade na consulta, precisão na execução.
        </p>
      </motion.div>

      <Divider className="w-full max-w-4xl mb-12" />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-4xl"
      >
        <Topic icon={<LuClock size={20}/>} label="Bate Ponto" variants={item} />
        <Topic icon={<LuFileText size={20}/>} label="Ficha de Registro" variants={item} />
        <Topic icon={<RiZzzFill size={20}/>} label="Envio de Ausência" variants={item} />
        <Topic icon={<LuGlobe size={20}/>} label="Site Principal" variants={item} />
        <Topic icon={<LuScale size={20}/>} label="Código Penal" variants={item} />
        <Topic icon={<LuBookOpenText size={20}/>} label="Regulamentos Internos" variants={item} />
      </motion.div>
    </section>
  );
}

function Topic({ icon, label, variants }: { icon: React.ReactNode; label: string; variants: any }) {
  return (
    <motion.div 
      variants={variants}
      className="flex items-center gap-4 group cursor-pointer transition-colors"
    >
      <div className="p-3 rounded-xl bg-default-100 group-hover:bg-primary/20 group-hover:text-blue-400 transition-colors">
        {icon}
      </div>
      <span className="text-lg font-medium text-default-700 group-hover:text-default-900">
        {label}
      </span>
    </motion.div>
  );
}