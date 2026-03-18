'use client';

import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function AusenciaPage() {
  return (
    <motion.section className="flex flex-col items-center justify-center min-h-170">
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-default-200">Documentação em breve...</h1>
      </motion.div>
    </motion.section>
  );
}
