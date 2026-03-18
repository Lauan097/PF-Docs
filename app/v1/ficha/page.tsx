'use client';

import { motion } from "framer-motion";
import { Image } from "@heroui/image";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { FileText, TriangleAlert } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GuiaFichaPage() {
  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto py-20 px-6"
    >
      <motion.div variants={itemVariants} className="mb-16 border-l-4 border-primary-500 pl-6">
        <h1 className="text-4xl font-extrabold text-default-900 tracking-tight mb-2">
          Ficha de Registro
        </h1>
        <p className="text-default-500 text-lg">
          Dúvidas de como preencher a ficha de registro? Aqui você encontra as respostas.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-16 mb-12">
        <Card>
          <CardHeader className="text-2xl font-bold text-default-800 gap-2">
            <FileText size={36} className="text-primary-400 bg-default-100 p-1 rounded" />
            O que é a Ficha de Registro?
          </CardHeader>
          <Divider />
          <CardBody className="text-default-500">
            <p>A Ficha de Registro é um documento essencial para o processo de cadastro. Usada principalmente para
              armazenar os dados pessoais e profissionais dos membros, ela é a base para a criação do perfil dentro do sistema.
              O preenchimento correto e completo da ficha é fundamental para garantir a autenticidade e a integridade dos dados, além de facilitar a comunicação interna e o acesso a benefícios e informações relevantes para cada membro.
            </p>
          </CardBody>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-26 flex flex-col items-center gap-4">
        <Image
          isBlurred
          src="/form.png"
          alt="Exemplo de Ficha de Registro"
          width="auto"
          height="auto"
          className="rounded-lg shadow-md"
        />
        <p className="text-[9px] text-default-300">Modelo da Ficha de Registro</p>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-16 mb-12">

        <Card className="bg-transparent border border-default-50">
          <CardHeader className="text-xl font-bold text-warning-800 gap-2">
            <FileText />
            Dados solicitados na Ficha:
          </CardHeader>
          <Divider />
          <CardBody className="text-default-600">
            <ul className="list-disc pl-6 space-y-2">
              <li>Dados OOC (Out Of Character)
                <ul className="list-disc pl-6 space-y-2 text-default-400">
                  <li>Seus dados fora do jogo (reais)</li>
                </ul>
              </li>
              <li>Dados IC (In Character)
                <ul className="list-disc pl-6 space-y-2 text-default-400">
                  <li>Seus dados dentro do jogo (fictícios)</li>
                </ul>
              </li>
              <li>Dados do Discord (pra comunicação e identificação)</li>
              <li>Foto e Assinatura</li>
            </ul>
          </CardBody>
          <Divider />
          <CardFooter className="text-sm text-default-400">
            <p>Esses dados são essenciais para garantir que você tenha acesso a todas as funcionalidades e benefícios do sistema.</p>
          </CardFooter>
        </Card>

      </motion.div>

      <Divider className="my-18" />

      <div className="space-y-12">
        
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-default-100 text-sm font-bold">01</span>
            <h2 className="text-xl font-bold">Campos Obrigatórios</h2>
          </div>
          <p className="text-default-600 leading-relaxed ml-12">
            A integridade dos dados é fundamental. <b>Todos os campos da ficha devem ser preenchidos.</b> Fichas que apresentarem campos 
            vazios ou preenchidos de qualquer jeito serão automaticamente descartadas pelo sistema.
          </p>
          <Divider className="my-12" />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-default-100 text-sm font-bold">02</span>
            <h2 className="text-xl font-bold">Padrão de Assinatura</h2>
          </div>
          <div className="ml-12 space-y-4">
            <p className="text-default-600 leading-relaxed">
              A assinatura não precisa ser complexa. Solicitamos um <b>rabisco simples, podendo ser a inicial do seu nome</b>. 
              Isso serve para autenticação rápida em documentos internos. Segue um exemplo:
            </p>
            <Card className="bg-default-50 border-none shadow-sm">
              <CardBody className="p-0">
                <div className="w-full flex items-center justify-center">
                   <div className="text-center">
                     <Image
                       src="/signature.png"
                       alt="Exemplo de Assinatura"
                       width="auto"
                       height="auto"
                     />
                   </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <Divider className="my-12" />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-default-100 text-sm font-bold">03</span>
            <h2 className="text-xl font-bold">Comprovante e Foto Oficial</h2>
          </div>
          <div className="ml-12 space-y-4">
            <p className="text-default-600 leading-relaxed">
              É obrigatório o envio de uma imagem clara do seu personagem. Para enviar, basta clicar na  
              <span className="text-success-500 font-bold"> caixa da foto</span> que o modal de imagem será aberto,
              ai é só carregar a imagem.  Sem a imagem, o registro não é processado. Exemplo:
            </p>
            <Card className="bg-default-50 border-none shadow-sm overflow-hidden">
              <CardBody className="p-0">
                <div className="w-full bg-default-200 flex items-center justify-center rounded-xl">
                   <Image
                     src="/photoExample.png"
                     alt="Tutorial de Envio"
                     width="auto"
                     height="auto"
                   />
                </div>
              </CardBody>
            </Card>
          </div>
          <Divider className="my-12" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-danger-50 border-1 border-danger-200 shadow-none">
            <CardBody className="p-6 flex flex-row gap-4 items-start">
              <div className="text-2xl text-warning-400 mt-2"><TriangleAlert /></div>
              <div>
                <h3 className="text-danger-800 font-bold text-lg mb-1">Atenção às Penalidades</h3>
                <p className="text-danger-600 text-sm leading-relaxed">
                  A inserção de informações falsas, erros gramaticais graves ou o não cumprimento dos padrões visuais citados acima resultará na 
                  <b> anulação imediata da ficha</b>. Além disso, o membro estará sujeito a uma <b>advertência formal</b> registrada em seu histórico.
                </p>
              </div>
            </CardBody>
          </Card>
        </motion.div>

      </div>

      <motion.div variants={itemVariants} className="mt-20 pt-8 border-t border-default-100 flex justify-between items-center text-default-400 text-xs">
        <p>© 2026 Polícia Federal — Departamento de Gestão Administrativa</p>
        <p>18/03/2026, 15:05</p>
      </motion.div>
      
    </motion.section>
  );
}