"use client";

import { motion } from "framer-motion";
import { TiWeatherCloudy } from "react-icons/ti";

export default function MainWeatherCard({ current, itemVariants }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md p-6 sm:p-8 border border-white/20 rounded-2xl"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <TiWeatherCloudy className="text-white/90 text-7xl sm:text-8xl" />
          </motion.div>
          <div>
            <motion.p
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="font-bold text-6xl sm:text-7xl"
            >
              {current.temp_c}°C
            </motion.p>
            <p className="opacity-80 mt-2 text-base sm:text-lg">
              {current.condition.text}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="opacity-60 text-sm">Feels like</p>
          <p className="font-semibold text-3xl sm:text-4xl">
            {current.feelslike_c}°
          </p>
        </div>
      </div>
    </motion.div>
  );
}
