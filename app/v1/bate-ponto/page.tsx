'use client';

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Clock, FileText, PauseCircle, TriangleAlert, Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BatePontoPage() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto py-20 px-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-16 border-l-4 border-primary-500 pl-6">
        <h1 className="text-4xl font-extrabold text-default-900 tracking-tight mb-2">
          Bate-Ponto
        </h1>
        <p className="text-default-500 text-lg">
          Guia completo de como utilizar o sistema de registro de turnos da Polícia Federal.
        </p>
      </motion.div>

      {/* Intro Card */}
      <motion.div variants={itemVariants} className="mt-16 mb-12">
        <Card>
          <CardHeader className="text-2xl font-bold text-default-800 gap-2">
            <Clock size={36} className="text-primary-400 bg-default-100 p-1 rounded" />
            O que é o Bate-Ponto?
          </CardHeader>
          <Divider />
          <CardBody className="text-default-500 space-y-3">
            <p>
              O bate-ponto é uma ferramenta fundamental para monitoramento e registro das atividades dos membros durante
              um patrulhamento. Por meio dele, conseguimos obter dados essenciais como{" "}
              <span className="text-primary-400 font-semibold">tempo em patrulhamento</span>, parceiros de turno,
              relatórios semanais, comportamento em serviço e situações ocorridas durante a patrulha.
            </p>
            <p>
              A Polícia Federal conta com seu próprio sistema para registrar turnos, totalmente vinculado à ficha do
              membro. Toda vez que você e outros membros forem iniciar serviço dentro do jogo, é{" "}
              <span className="text-danger-500 font-bold">OBRIGATÓRIO iniciar o ponto aqui no Discord</span>, para que
              fique registrado em nosso sistema.
            </p>
            <p>
              Os dados coletados servem para monitoramento de atividade e são uma das bases fundamentais para decisões
              futuras, como promoções, premiações e upamentos. Além disso, funcionam como registro oficial em casos de
              denúncias falsas ou contestações disciplinares.
            </p>
          </CardBody>
        </Card>
      </motion.div>

      <Divider className="my-18" />

      <div className="space-y-12">

        {/* Seção 1 — Iniciar Serviço */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-default-100 text-sm font-bold">01</span>
            <h2 className="text-xl font-bold">Iniciar Serviço — Como abrir um ponto?</h2>
          </div>
          <p className="text-default-600 leading-relaxed ml-12">
            Para abrir um ponto, acesse seu painel, clique em <b>Iniciar Ponto</b> e preencha as informações solicitadas
            no modal. Abaixo, explicamos cada campo em detalhe.
          </p>

          <div className="ml-12 space-y-6">

            {/* Campo Líder da Patrulha */}
            <Card className="bg-transparent border border-default-100">
              <CardHeader className="gap-2 text-default-700 font-bold">
                <Users size={20} className="text-primary-400" />
                Campo &quot;Líder da Patrulha&quot;
              </CardHeader>
              <Divider />
              <CardBody className="text-default-500 space-y-2">
                <p>
                  Informe o <b>líder inicial</b> que irá comandar o patrulhamento. Normalmente é o P2, mas isso pode
                  variar conforme a decisão tomada no início do turno. O líder pode ser você mesmo ou outro membro —
                  recomendamos sempre que o mais experiente assuma a liderança.
                </p>
                <p className="text-warning-500 font-semibold text-sm">
                  ⚠️ Organizem-se e definam o líder <u>antes</u> de abrir o ponto. O campo é obrigatório e não pode ser
                  alterado após o início.
                </p>
              </CardBody>
            </Card>

            {/* Campo Participantes Iniciais */}
            <Card className="bg-transparent border border-default-100">
              <CardHeader className="gap-2 text-default-700 font-bold">
                <Users size={20} className="text-primary-400" />
                Campo &quot;Participantes Iniciais&quot;
              </CardHeader>
              <Divider />
              <CardBody className="text-default-500 space-y-4">
                <p>
                  Insira aqui os outros membros que irão patrulhar com você.{" "}
                  <b>Você não precisa se incluir neste campo</b>, pois você é adicionado automaticamente ao abrir o ponto.
                  O Líder da Patrulha também <b>não deve ser incluído</b> aqui, pois já foi selecionado no campo acima.
                </p>

                <div>
                  <p className="text-default-400 font-medium mb-2">Exemplos práticos:</p>
                  <div className="space-y-3 pl-4 border-l-2 border-default-200">
                    <div>
                      <p className="text-success-500 font-semibold text-sm">Patrulha com 2 membros — você é o Líder:</p>
                      <p className="text-default-500 text-sm">
                        → &quot;Líder da Patrulha&quot;: você. &quot;Participantes Iniciais&quot;: o outro membro.
                      </p>
                    </div>
                    <div>
                      <p className="text-success-500 font-semibold text-sm">Patrulha com 2 membros — outro é o Líder:</p>
                      <p className="text-default-500 text-sm">
                        → &quot;Líder da Patrulha&quot;: o outro membro. &quot;Participantes Iniciais&quot;:{" "}
                        <i>deixe vazio</i> — você é incluído automaticamente.
                      </p>
                    </div>
                    <div>
                      <p className="text-success-500 font-semibold text-sm">Patrulha com 3 ou 4 membros:</p>
                      <p className="text-default-500 text-sm">
                        → &quot;Líder da Patrulha&quot;: o líder escolhido. &quot;Participantes Iniciais&quot;: os
                        demais membros, sem incluir você nem o líder.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-danger-500 font-bold text-sm bg-danger-50 p-3 rounded-lg">
                  ⚠️ Em resumo: no campo &quot;Participantes Iniciais&quot;, você não inclui a si mesmo nem o Líder já
                  selecionado acima. Organizem as posições antes de iniciar!
                </p>
              </CardBody>
            </Card>

            {/* Campo Anotações Iniciais */}
            <Card className="bg-transparent border border-default-100">
              <CardHeader className="gap-2 text-default-700 font-bold">
                <FileText size={20} className="text-primary-400" />
                Campo &quot;Anotações Iniciais&quot;
              </CardHeader>
              <Divider />
              <CardBody className="text-default-500 space-y-2">
                <p>
                  Campo opcional para registrar observações relevantes antes do início do patrulhamento — objetivos,
                  possíveis imprevistos ou qualquer informação útil para o turno.
                </p>
                <p className="text-default-400 italic text-sm">
                  Exemplos: <i>&quot;O membro X pode se ausentar a qualquer momento por instabilidade de conexão.&quot;</i>{" "}
                  ou <i>&quot;Objetivo: realizar no mínimo 2 apreensões durante o turno.&quot;</i>
                </p>
              </CardBody>
            </Card>

            <p className="text-danger-400 text-sm italic">
              Caso você for patrulhar com algum membro que não possua permissão para iniciar pontos, adicione ele no campo
              de informações inicias, para fins de registros.
            </p>

          </div>
          <Divider className="my-12" />
        </motion.div>

        {/* Seção 2 — Pausas */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-default-100 text-sm font-bold">02</span>
            <h2 className="text-xl font-bold">Pausas</h2>
          </div>
          <div className="ml-12 space-y-6">
            <p className="text-default-600 leading-relaxed">
              As pausas são recursos disponíveis durante o patrulhamento para situações em que o membro precisa se
              ausentar por um curto período{" "}
              <b>sem precisar encerrar o ponto</b>. O tempo em pausa{" "}
              <b>não é contabilizado</b> no total do turno.
            </p>

            {/* Regras */}
            <Card className="bg-transparent border border-default-100">
              <CardHeader className="gap-2 text-default-700 font-bold">
                <PauseCircle size={20} className="text-warning-400" />
                Regras das Pausas
              </CardHeader>
              <Divider />
              <CardBody className="text-default-500 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Recomendamos até <b>5 pausas por ponto</b>, com até <b>30 minutos cada</b>.</li>
                  <li>
                    É <span className="text-danger-500 font-bold">obrigatório pausar o ponto</span> no momento em que
                    se ausentar, por menor que seja a ausência.
                  </li>
                  <li>
                    Se a ausência for superior a 30 minutos,{" "}
                    <b>finalize o ponto e inicie um novo</b> após o retorno.
                  </li>
                  <li>Pausas sem motivo válido serão negadas pelo sistema.</li>
                </ul>
                <p className="text-danger-500 font-bold text-sm bg-danger-50 p-3 rounded-lg">
                  ⚠️ Deixar o ponto ativo durante uma ausência sem registrar pausa resultará em: ponto não
                  contabilizado, <b>advertência nível 2</b> e <b>multa de R$ 40.000</b>.
                </p>
                <p className="text-default-400 text-sm">
                  Membros que patrulharem junto ao infrator e presenciarem a recusa em pausar o ponto{" "}
                  <b>devem incluir esse fato no relatório final</b>, sob pena de sofrerem consequências graves.
                </p>
              </CardBody>
            </Card>

            {/* Campo Motivo */}
            <Card className="bg-transparent border border-default-100">
              <CardHeader className="gap-2 text-default-700 font-bold">
                <FileText size={20} className="text-primary-400" />
                Campo &quot;Motivo&quot;
              </CardHeader>
              <Divider />
              <CardBody className="text-default-500">
                <p>
                  Informe obrigatoriamente o motivo da pausa. Pausas sem justificativa real e necessária serão negadas,
                  e o membro poderá ter o ponto removido.
                </p>
              </CardBody>
            </Card>

            {/* Situações Especiais */}
            <Card className="bg-transparent border border-default-100">
              <CardHeader className="gap-2 text-default-700 font-bold">
                <TriangleAlert size={20} className="text-warning-400" />
                Situações Especiais
              </CardHeader>
              <Divider />
              <CardBody className="text-default-500 space-y-4">
                <div>
                  <p className="font-semibold text-default-700 mb-1">Você crashou durante a patrulha:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Vai retornar ao jogo → registre uma pausa e retome normalmente após retornar ao game.</li>
                    <li>Não conseguiu retornar → finalize o ponto o mais rápido possível.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-default-700 mb-1">Seu parceiro crashou e não responde mais:</p>
                  <p className="text-danger-500 font-semibold text-sm">
                    É obrigatório incluir no seu relatório final o horário exato em que o parceiro crashou, para que o
                    tempo seja corretamente descontado do registro dele.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
          <Divider className="my-12" />
        </motion.div>

        {/* Seção 3 — Finalizar Serviço */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-default-100 text-sm font-bold">03</span>
            <h2 className="text-xl font-bold">Finalizar Serviço — Como encerrar corretamente?</h2>
          </div>
          <div className="ml-12 space-y-6">
            <p className="text-default-600 leading-relaxed">
              Finalizar o ponto é simples, mas exige atenção aos detalhes. Você precisará informar se houve participantes
              adicionais e redigir o relatório completo da patrulha.
            </p>

            {/* Campo Participantes Adicionais */}
            <Card className="bg-transparent border border-default-100">
              <CardHeader className="gap-2 text-default-700 font-bold">
                <Users size={20} className="text-primary-400" />
                Campo &quot;Participantes Adicionais&quot;
              </CardHeader>
              <Divider />
              <CardBody className="text-default-500 space-y-2">
                <p>
                  Insira aqui os membros que <b>entraram no turno após o início</b>, ou seja, aqueles que não foram
                  registrados ao abrir o ponto.
                </p>
                <p className="text-default-400 text-sm italic">
                  Exemplo: você iniciou com 3 membros. No meio do turno, ao retornar à delegacia, um novo membro
                  disponível se juntou à patrulha — ele é um participante adicional.
                </p>
                <p className="text-warning-500 text-sm font-semibold">
                  Não inclua você mesmo nem os membros já registrados na abertura do ponto. Sujeito a punições!
                </p>
              </CardBody>
            </Card>

            {/* Campo Relatório Final */}
            <Card className="bg-transparent border border-default-100">
              <CardHeader className="gap-2 text-default-700 font-bold">
                <FileText size={20} className="text-primary-400" />
                Campo &quot;Relatório Final&quot;
              </CardHeader>
              <Divider />
              <CardBody className="text-default-500 space-y-4">
                <p>
                  O relatório final é a <b>peça mais importante do ponto</b>. É nele que você descreve com precisão
                  tudo o que ocorreu durante o turno. Todas as informações inseridas devem ser{" "}
                  <b>verídicas, detalhadas e coerentes</b>.
                </p>

                <div>
                  <p className="text-danger-500 font-semibold text-sm mb-1">Regras importantes:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-default-500">
                    <li>Limite máximo de <b>1.400 caracteres</b>.</li>
                    <li>Erros gramaticais e informações incompletas resultarão em punição.</li>
                    <li>Relatórios curtos, feitos com má vontade ou fora do padrão serão recusados e o ponto será anulado.</li>
                    <li className="text-danger-500 font-semibold">
                      A inserção de informações falsas ou a omissão de dados pode resultar em advertências com multas e,
                      em casos graves, exoneração.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-success-500 font-semibold text-sm mb-2">Modelo aceito de relatório:</p>
                  <Card className="bg-default-50 border border-default-100 shadow-none">
                    <CardBody className="text-default-500 text-sm font-mono space-y-1">
                      <p><b>Resumo do Patrulhamento:</b></p>
                      <p className="text-default-400 mb-2">Descreva brevemente como foi o patrulhamento realizado.</p>
                      <p><b>Ocorrências Atendidas:</b></p>
                      <p className="text-default-400 mb-2">Liste as ocorrências atendidas (abordagens, perseguições, apoio, etc.).</p>
                      <p><b>Ações Realizadas:</b></p>
                      <p className="text-default-400 mb-2">Explique as principais ações tomadas durante o serviço.</p>
                      <p><b>Observações:</b></p>
                      <p className="text-default-400 mb-2">Informações adicionais relevantes (comportamento de civis, situações suspeitas, etc.).</p>
                      <p><b>Declaração Final:</b></p>
                      <p className="text-default-400">Declaro que as informações acima são verídicas e correspondem às atividades realizadas durante meu expediente.</p>
                    </CardBody>
                  </Card>
                </div>
              </CardBody>
            </Card>

            {/* Dúvidas Frequentes */}
            <div>
              <h3 className="text-lg font-bold text-default-700 mb-4">Dúvidas frequentes sobre finalização</h3>
              <div className="space-y-4">

                <Card className="bg-transparent border border-default-100">
                  <CardHeader className="text-default-700 font-semibold gap-2 text-sm">
                    <span className="text-primary-400 font-bold">Q:</span>
                    Um membro inicial saiu durante o patrulhamento. O que fazer?
                  </CardHeader>
                  <Divider />
                  <CardBody className="text-default-500 text-sm">
                    Continue normalmente! Ele finaliza o ponto dele e você segue a patrulha — pode substituí-lo por
                    outro membro disponível. Não se esqueça de mencionar a saída dele no relatório final.
                  </CardBody>
                </Card>

                <Card className="bg-transparent border border-default-100">
                  <CardHeader className="text-default-700 font-semibold gap-2 text-sm">
                    <span className="text-primary-400 font-bold">Q:</span>
                    Estava em dupla e o parceiro saiu. Posso seguir sozinho?
                  </CardHeader>
                  <Divider />
                  <CardBody className="text-default-500 text-sm space-y-2">
                    <p>
                      <b className="text-danger-500">Não é permitido patrulhar sozinho.</b> Você tem duas opções:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Finalize seu ponto normalmente.</li>
                      <li>
                        Registre uma pausa com o motivo &quot;aguardando nova guarnição&quot; e espere outro grupo.{" "}
                        <span className="text-warning-500 font-semibold">
                          Essa pausa não pode ultrapassar 30 minutos.
                        </span>{" "}
                        Se não conseguir reforço no prazo, finalize o expediente.
                      </li>
                    </ul>
                  </CardBody>
                </Card>

              </div>
            </div>
          </div>
          <Divider className="my-12" />
        </motion.div>

        {/* Card — Duração Mínima */}
        <motion.div variants={itemVariants}>
          <Card className="bg-warning-50 border-1 border-warning-200 shadow-none">
            <CardBody className="p-6 flex flex-row gap-4 items-start">
              <div className="text-2xl text-warning-500 mt-1"><TriangleAlert /></div>
              <div>
                <h3 className="text-warning-800 font-bold text-lg mb-1">Requisito Mínimo de Duração</h3>
                <p className="text-warning-700 text-sm leading-relaxed">
                  Sessões com duração inferior a <b>1 hora líquida</b> (sem contar pausas) não serão aceitas, a menos
                  que o membro tenha justificado previamente ao Auto-Comando. Certifique-se de cumprir o tempo mínimo
                  antes de encerrar o ponto.
                </p>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Card — Penalidades */}
        <motion.div variants={itemVariants}>
          <Card className="bg-danger-50 border-1 border-danger-200 shadow-none">
            <CardBody className="p-6 flex flex-row gap-4 items-start">
              <div className="text-2xl text-warning-400 mt-1"><TriangleAlert /></div>
              <div>
                <h3 className="text-danger-800 font-bold text-lg mb-1">Atenção às Penalidades</h3>
                <p className="text-danger-600 text-sm leading-relaxed">
                  A inserção de informações falsas, a omissão de dados, erros gramaticais graves ou o descumprimento das
                  regras descritas nesta documentação resultará em{" "}
                  <b>advertências formais com multas</b> e, em casos mais graves,{" "}
                  <b>exoneração</b>.
                </p>
              </div>
            </CardBody>
          </Card>
        </motion.div>

      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="mt-20 pt-8 border-t border-default-100 flex justify-between items-center text-default-400 text-xs"
      >
        <p>© 2026 Polícia Federal — Departamento de Gestão Administrativa</p>
        <p>29/03/2026, 23:59</p>
      </motion.div>

    </motion.section>
  );
}
