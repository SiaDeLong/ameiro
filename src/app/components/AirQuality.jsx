"use client";

import { motion } from "framer-motion";
import { WiSmog } from "react-icons/wi";

export default function AirQuality({ airQuality, itemVariants }) {
  if (!airQuality) return null;

  const pollutants = [
    { label: "PM2.5", value: airQuality.pm2_5.toFixed(1) },
    { label: "PM10", value: airQuality.pm10.toFixed(1) },
    { label: "O₃", value: airQuality.o3.toFixed(1) },
  ];

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 border border-white/15 rounded-xl"
    >
      <div className="flex items-center gap-2 mb-4">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <WiSmog className="text-white/80 text-3xl sm:text-4xl" />
        </motion.div>
        <h3 className="font-semibold text-base sm:text-lg">Air Quality</h3>
      </div>

      <div className="gap-3 grid grid-cols-3 mb-4">
        {pollutants.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="text-center"
          >
            <p className="opacity-60 mb-1 text-xs sm:text-sm">{item.label}</p>
            <p className="font-semibold text-base sm:text-lg">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-8 pt-3 border-white/10 border-t">
        <div className="text-center">
          <p className="opacity-60 text-xs sm:text-sm">US EPA</p>
          <p className="font-bold text-base sm:text-lg">
            {airQuality["us-epa-index"]}
          </p>
        </div>
        <div className="text-center">
          <p className="opacity-60 text-xs sm:text-sm">UK DEFRA</p>
          <p className="font-bold text-base sm:text-lg">
            {airQuality["gb-defra-index"]}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
