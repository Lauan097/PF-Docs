"use client";

import { motion } from "framer-motion";
import { Link } from "@heroui/link";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { LuClock, LuFileText, LuGlobe, LuScale, LuBookOpenText } from "react-icons/lu";
import { title } from "@/components/primitives";
import { RiZzzFill } from "react-icons/ri";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@heroui/button";

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DocsHomePage() {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const socials = [
    { name: "Discord", icon: <FaDiscord size={20} />, href: "#" },
    { name: "Youtube", icon: <FaYoutube size={20} />, href: "#" },
    { name: "Instagram", icon: <FaInstagram size={20} />, href: "#" }
  ];

  return (
    <motion.section variants={containerVariants} initial="hidden" animate="show" className="pt-6">
      <motion.div variants={itemVariants} className="mb-20">
        <h1 className={title({ size: "md", color: "blue", className: "font-black" })}>
          Bem-vindo à <span className="text-default-600">Documentação</span>
        </h1>
        <p className="text-default-500 mt-4 font-medium border-l-4 border-primary pl-4">
          Tudo que você procura sobre a Polícia Federal está aqui. Procedimentos, regulamentos, informações sobre sistemas e muito mais.
        </p>
      </motion.div>

      <motion.section variants={itemVariants} className="mb-16">
        <h4 className="text-lg font-semibold text-default-700 mb-6">
          Explore os tópicos mais acessados:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Card className="hover:bg-default-50 transition-colors cursor-pointer">
            <CardHeader className="flex items-center gap-3 border-b border-default-100 pb-3">
              <LuClock size={28} className="text-primary-400 bg-default-100 p-1 rounded" />
              Bate Ponto
            </CardHeader>
            <CardBody className="text-default-400">
              Descubra como registrar seus pontos de forma rápida e eficiente, garantindo a conformidade com as normas internas.
            </CardBody>
          </Card>

          <Card className="hover:bg-default-50 transition-colors cursor-pointer">
            <CardHeader className="flex items-center gap-3 border-b border-default-100 pb-3">
              <LuFileText size={28} className="text-primary-400 bg-default-100 p-1 rounded" />
              Ficha de Registro
            </CardHeader>
            <CardBody className="text-default-400">
              Entenda como preencher sua ficha de registro corretamente, evitando erros comuns e garantindo a conformidade.
            </CardBody>
          </Card>

          <Card className="hover:bg-default-50 transition-colors cursor-pointer">
            <CardHeader className="flex items-center gap-3 border-b border-default-100 pb-3">
              <RiZzzFill size={28} className="text-primary-400 bg-default-100 p-1 rounded" />
              Envio de Ausência
            </CardHeader>
            <CardBody className="text-default-400">
              Aprenda o processo para solicitar ausências, seja por motivos pessoais ou profissionais, de maneira simples e clara.
            </CardBody>
          </Card>

          <Card className="hover:bg-default-50 transition-colors cursor-pointer">
            <CardHeader className="flex items-center gap-3 border-b border-default-100 pb-3">
              <LuGlobe size={28} className="text-primary-400 bg-default-100 p-1 rounded" />
              Site Principal
            </CardHeader>
            <CardBody className="text-default-400">
              Acesse o site oficial da Polícia Federal para obter informações atualizadas, notícias e recursos adicionais.
            </CardBody>
          </Card>

          <Card className="hover:bg-default-50 transition-colors cursor-pointer">
            <CardHeader className="flex items-center gap-3 border-b border-default-100 pb-3">
              <LuScale size={28} className="text-primary-400 bg-default-100 p-1 rounded" />
              Código Penal
            </CardHeader>
            <CardBody className="text-default-400">
              Saiba como consultar o Código Penal atualizado de forma simples e rápida, usando o nosso sistema inteligênte de busca.
            </CardBody>
          </Card>

          <Card className="hover:bg-default-50 transition-colors cursor-pointer">
            <CardHeader className="flex items-center gap-3 border-b border-default-100 pb-3">
              <LuBookOpenText size={28} className="text-primary-400 bg-default-100 p-1 rounded" />
              Regulamentos Internos
            </CardHeader>
            <CardBody className="text-default-400">
              Familiarize-se com os regulamentos internos da Polícia Federal, garantindo que suas ações estejam sempre alinhadas às normas.
            </CardBody>
          </Card>
        </div>
        <Divider className="my-16" />
      </motion.section>

      <motion.section variants={itemVariants} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div>
          <h3 className="flex items-center gap-2 text-default-800 font-bold text-lg mb-3">
            <HelpCircle size={20} className="text-red-500" />
            Precisa de ajuda?
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Se você não encontrou o que procurava na documentação, fale com um administrador via Discord.
          </p>
          <Link href="#" className="text-sm text-red-400 font-bold">
            Acessar Discord <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>

        <div>
          <h3 className="text-default-800 font-bold text-lg mb-3">
            Nossas Redes
          </h3>
          <p className="text-default-400 text-sm mb-4">
            Acompanhe as novidades e anúncios oficiais.
          </p>
          <div className="flex gap-3">
            {socials.map((social, idx) => (
              <Button
                key={idx}
                href={social.href}
                title={social.name}
                as={Link}
                isIconOnly
              >
                {social.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
      </motion.section>

    </motion.section>
  );
}