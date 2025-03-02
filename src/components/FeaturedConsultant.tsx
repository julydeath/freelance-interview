/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { moduleData } from "@/data/sampleData";
import { fadeIn, fadeInUp, staggerChildren } from "@/utils/animations";
import { motion } from "framer-motion";

export default function FeaturedConsultant({ consultants, shortName }: any) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-animate">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
            Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our {shortName} Experts
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {consultants.introduction}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {moduleData.consultants.profiles.map((consultant, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={consultant.image}
                alt={consultant.name}
                className="h-60 w-full md:w-48 object-cover md:object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">
                  {consultant.name}
                </h3>
                <p className="text-gray-600 mb-4">{consultant.bio}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-black">Specialties:</h4>
                  <p className="text-gray-700">{consultant.specialties}</p>
                </div>
                <a
                  href={`mailto:${consultant.email}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email {consultant.name.split(" ")[0]}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
