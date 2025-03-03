"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <motion.div
        className="relative w-20 h-20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer Ring */}
        <div className="absolute w-full h-full rounded-full border-t-4 border-gray-200"></div>

        {/* Animated Spinner */}
        <motion.div
          className="w-full h-full rounded-full border-t-4 border-blue-500"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Text */}
        <span className="absolute text-white font-semibold text-sm">
          Loading...
        </span>
      </motion.div>
    </div>
  );
}
