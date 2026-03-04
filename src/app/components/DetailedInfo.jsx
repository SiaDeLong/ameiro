"use client";

import { motion } from "framer-motion";
import { WiBarometer, WiCloud, WiRaindrop, WiWindy } from "react-icons/wi";

export default function DetailedInfo({ current, itemVariants }) {
  const details = [
    {
      icon: WiBarometer,
      label: "Pressure",
      value: `${current.pressure_mb} mb`,
    },
    {
      icon: WiCloud,
      label: "Cloud Cover",
      value: `${current.cloud}%`,
    },
    {
      icon: WiRaindrop,
      label: "Precipitation",
      value: `${current.precip_mm} mm`,
    },
    {
      icon: WiWindy,
      label: "Wind Gust",
      value: `${current.gust_kph} km/h`,
    },
  ];

  return (
    <motion.div variants={itemVariants} className="gap-3 grid grid-cols-2">
      {details.map((detail, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 border border-white/15 rounded-xl cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="opacity-60 mb-1 text-sm sm:text-base">
                {detail.label}
              </p>
              <p className="font-semibold text-lg sm:text-xl">{detail.value}</p>
            </div>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <detail.icon className="text-white/80 text-4xl sm:text-5xl" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
