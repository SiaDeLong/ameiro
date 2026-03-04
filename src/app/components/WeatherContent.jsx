"use client";

import { motion } from "framer-motion";
import WeatherHeader from "./WeatherHeader";
import MainWeatherCard from "./MainWeatherCard";
import QuickStats from "./QuickStats";
import DetailedInfo from "./DetailedInfo";
import AirQuality from "./AirQuality";

export default function WeatherContent({
  weatherData,
  containerVariants,
  itemVariants,
}) {
  return (
    <motion.div
      key="weather-data"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20 }}
      className="flex flex-col gap-4 w-full"
    >
      <WeatherHeader
        location={weatherData.location}
        itemVariants={itemVariants}
      />

      <MainWeatherCard
        current={weatherData.current}
        itemVariants={itemVariants}
      />

      <QuickStats current={weatherData.current} itemVariants={itemVariants} />

      <DetailedInfo current={weatherData.current} itemVariants={itemVariants} />

      <AirQuality
        airQuality={weatherData.current.air_quality}
        itemVariants={itemVariants}
      />

      <motion.p
        variants={itemVariants}
        className="opacity-40 text-xs sm:text-sm text-center"
      >
        Updated: {weatherData.current.last_updated}
      </motion.p>
    </motion.div>
  );
}
