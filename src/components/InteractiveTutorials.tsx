/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { fadeIn } from "@/utils/animations";
import { motion } from "framer-motion";
import { useState } from "react";

export default function InteractiveTutorials({ tutorials, shortName }: any) {
  const [activeVideo, setActiveVideo] = useState(0);

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
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learning Resources
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our interactive tutorials and demos to master SAP{" "}
            {shortName} capabilities.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg aspect-video"
              >
                <iframe
                  className="w-full h-full"
                  src={tutorials[activeVideo].video_url}
                  title={tutorials[activeVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {tutorials[activeVideo].title}
                </h3>
                <p className="text-gray-600">
                  Duration: {tutorials[activeVideo].duration}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Available Tutorials
              </h3>
              <div className="space-y-4">
                {tutorials.map((tutorial: any, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                      activeVideo === index
                        ? "bg-blue-100 border-l-4 border-blue-600"
                        : "bg-white hover:bg-gray-100 shadow-sm"
                    }`}
                    onClick={() => setActiveVideo(index)}
                  >
                    <div className="flex items-center">
                      <div className="rounded-full bg-blue-600 p-2 mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {tutorial.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {tutorial.duration}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#contact"
                className="inline-flex items-center mt-6 w-full justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow hover:shadow-md transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Custom Training
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
