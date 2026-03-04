"use client";

import { motion } from "framer-motion";

export default function WeatherHeader({ location, itemVariants }) {
  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-1">
      <h2 className="font-bold text-3xl sm:text-4xl">{location.name}</h2>
      <p className="opacity-60 text-sm sm:text-base">
        {location.region}, {location.country} • {location.localtime}
      </p>
    </motion.div>
  );
}
