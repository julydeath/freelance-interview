"use client";

import { fadeIn, fadeInUp, staggerChildren } from "@/utils/animations";
import { motion } from "framer-motion";
import { useState } from "react";


export default function AboutUs() {
  const [activeTab, setActiveTab] = useState(0);

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
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn more about our mission, vision, and the values that drive our
            company forward. We specialize in SAP solutions that enhance
            business operations across multiple domains.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {section.title}
              </h3>
              <p className="text-gray-600">{section.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* SAP Modules Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our SAP Modules
          </h2>
          <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
            {sapModules.map((module, index) => (
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

          <div className="relative min-h-[300px] max-w-6xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {sapModules[activeTab].title}
              </h3>
              <p className="text-lg text-gray-700">
                {sapModules[activeTab].description}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            src="/images/company-team.jpg"
            alt="Our Team"
            className="max-w-5xl w-full mx-auto rounded-lg shadow-lg"
          />
          <p className="text-gray-500 mt-4 text-sm">
            Our dedicated team working towards a better future.
          </p>
        </div>
      </div>
    </section>
  );
}

const aboutSections = [
  {
    title: "Our Mission",
    description:
      "To provide innovative solutions that empower businesses and drive success.",
  },
  {
    title: "Our Vision",
    description:
      "To be the global leader in enterprise solutions, fostering growth and efficiency.",
  },
  {
    title: "Our Values",
    description:
      "Integrity, innovation, and customer success are at the heart of everything we do.",
  },
];

const sapModules = [
  {
    title: "SAP Core",
    description:
      "SAP Core module provides the fundamental framework for business operations, integrating various enterprise functions for seamless performance.",
  },
  {
    title: "Transport Management",
    description:
      "The SAP Transport module streamlines logistics and supply chain management, optimizing transportation efficiency.",
  },
  {
    title: "Financial Management",
    description:
      "SAP Financial module ensures comprehensive financial planning, accounting, and management to support business growth.",
  },
  {
    title: "Sales and Distribution",
    description:
      "SAP Sales and Distribution module facilitates order management, pricing, and delivery, enhancing customer satisfaction.",
  },
];
