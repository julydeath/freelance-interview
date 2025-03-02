"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

export default function Overview({
  overView,
  moduleName,
}: {
  overView: string;
  moduleName: string;
}) {
  return (
    <div>
      <section id="overview" className="py-20 bg-white scroll-animate">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Introduction to {moduleName}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{overView}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
