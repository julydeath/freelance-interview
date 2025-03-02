/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { fadeIn } from "@/utils/animations";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function SubModules({ subModules, shortName }: any) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white scroll-animate">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            Components
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sub-Modules
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore the specialized components that make up the SAP {shortName}{" "}
            ecosystem.
          </p>
        </motion.div>

        {/* Tabs for Sub-Modules */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap border-b border-gray-200 mb-8">
            {subModules.map((module: any, index: number) => (
              <button
                key={index}
                className={`text-base md:text-lg py-4 px-6 font-medium focus:outline-none transition-colors duration-200 ${
                  activeTab === index
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {module.title}
              </button>
            ))}
          </div>

          {/* Add a wrapper with min height to prevent shifting */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {subModules.map((module: any, index: number) =>
                activeTab === index ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 rounded-xl p-8 shadow-sm"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {module.title}
                    </h3>
                    <p className="text-lg mb-6 text-gray-700">
                      {module.overview}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-lg mb-4 text-gray-800">
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {module.features.map((feature: any, idx: any) => (
                            <li key={idx} className="flex items-start">
                              <svg
                                className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-4 text-gray-800">
                          Benefits
                        </h4>
                        <p className="text-gray-700">{module.benefits}</p>

                        <motion.a
                          href={module.pdfLink}
                          className="inline-flex items-center mt-6 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow hover:shadow-md transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Download {module.pdfName}
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
