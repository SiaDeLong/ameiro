"use client";

import { motion } from "framer-motion";
import { WiHumidity, WiStrongWind, WiDaySunny } from "react-icons/wi";
import { TbEye } from "react-icons/tb";

export default function QuickStats({ current, itemVariants }) {
  const stats = [
    {
      icon: WiHumidity,
      value: `${current.humidity}%`,
      label: "Humidity",
    },
    {
      icon: WiStrongWind,
      value: current.wind_kph,
      label: "Wind km/h",
    },
    {
      icon: WiDaySunny,
      value: current.uv,
      label: "UV Index",
    },
    {
      icon: TbEye,
      value: current.vis_km,
      label: "Visibility",
    },
  ];

  return (
    <motion.div
      variants={itemVariants}
      className="gap-3 grid grid-cols-2 sm:grid-cols-4"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 border border-white/15 rounded-xl text-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          >
            <stat.icon className="mx-auto mb-2 text-white/90 text-4xl sm:text-5xl" />
          </motion.div>
          <p className="font-bold text-xl sm:text-2xl">{stat.value}</p>
          <p className="opacity-60 mt-1 text-xs sm:text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
