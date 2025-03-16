/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

export const HeroRole = ({ data : roleData }: any) => (
  <section className="relative h-96 md:h-[60vh] overflow-hidden bg-gradient-to-r from-green-900 to-emerald-900">
    <div className="absolute inset-0 flex flex-col justify-center z-20 container mx-auto px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-4xl text-center"
      >
        <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold mb-6">
          SAP Career Path
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {roleData?.title} Role
        </h1>
        <div className="flex justify-center gap-6">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <p className="text-lg text-white/90">Average Salary</p>
            <p className="text-3xl font-bold text-white mt-2">
              {roleData?.salary}
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <p className="text-lg text-white/90">Experience Level</p>
            <p className="text-3xl font-bold text-white mt-2">
              {roleData?.experience}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);