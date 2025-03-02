/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

export default function Hero({ transportModule }: any) {
  return (
    <div>
      <section className="relative h-96 md:h-screen md:max-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 z-10"></div>
        <motion.img
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 10 }}
          src={transportModule?.banner_image}
          alt={`${transportModule?.moduleName} Banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center z-20 container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              SAP Module
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {transportModule?.headline}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl lowercase">
              a {transportModule?.subheadline}
            </p>
            <div className="mt-8">
              <motion.a
                href="#overview"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 ml-4 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
