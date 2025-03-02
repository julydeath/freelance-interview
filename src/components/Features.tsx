/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { moduleData } from "@/data/sampleData";
import { fadeIn, fadeInUp, staggerChildren } from "@/utils/animations";
import { motion } from "framer-motion";

export default function Features({ features, shortName }: any) {
  return (
    <section className="py-20 bg-gray-50 scroll-animate">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features and Advantages
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover how SAP {shortName} can transform your business operations
            with these powerful features.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature: any, index: number) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={feature.icon}
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            src="https://blogs.dpuerp.in/images/blog/64/10877-Title-essence-of-logistics-management.jpg"
            alt="Logistics Flowchart"
            className="max-w-5xl w-full mx-auto rounded-lg shadow-lg"
          />
          <p className="text-gray-500 mt-4 text-sm">
            Streamlined logistics flow with SAP {moduleData.moduleShortName}
          </p>
        </div>
      </div>
    </section>
  );
}
