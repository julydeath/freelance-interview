/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

export const HeroSubmodule = ({ data :submoduleData }: any) => (
    <section className="relative h-96 md:h-[70vh] overflow-hidden bg-indigo-900">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-purple-900/70 z-10" />
      <motion.div
        className="absolute inset-0 bg-pattern opacity-20 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      />
      <div className="absolute inset-0 flex flex-col justify-center z-20 container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-5xl text-center"
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-bold mb-6">
            SAP {submoduleData?.module} Submodule
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {submoduleData?.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {submoduleData?.description}
          </p>
        </motion.div>
      </div>
    </section>
  );