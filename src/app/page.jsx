"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import WeatherContent from "./components/WeatherContent";
import { TiWeatherCloudy } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=116d98d3442b430bb5252817251804&q=${encodeURIComponent(city)}&aqi=yes`,
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-[url('/maple.jpg')] bg-cover bg-center px-4 py-8 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col items-center sm:items-start gap-6 bg-black/40 shadow-2xl backdrop-blur-2xl p-6 sm:p-8 border border-white/10 rounded-2xl w-full max-w-[900px]"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-end gap-2"
        >
          <h1 className="font-black text-5xl sm:text-6xl">Ame.iro</h1>
          <h1 className="mb-1 sm:mb-2 font-medium text-lg sm:text-xl">
            雨いろ
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full"
        >
          <SearchBar onSearch={handleSearch} />
        </motion.div>

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="border-3 border-white/20 border-t-white rounded-full w-6 h-6"
              />
              <p className="text-white">Loading weather data...</p>
            </motion.div>
          )}

          {error && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-400"
            >
              {error}
            </motion.p>
          )}

          {weatherData && (
            <WeatherContent
              weatherData={weatherData}
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
          )}
        </AnimatePresence>
      </motion.main>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col gap-3 bg-black/30 backdrop-blur-xl px-5 py-3 border border-white/10 rounded-2xl w-full max-w-[900px]"
      >
        <div className="flex flex-col gap-2">
          <h1 className="opacity-70 font-medium text-xs">Powered By</h1>
          <div className="flex justify-between items-center gap-8 p-2 border border-white/[.145] border-solid rounded-lg">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={50}
              height={12}
              priority
            />
            <Image
              className="dark:invert"
              src="/tailwind.svg"
              alt="Tailwind CSS logo"
              width={30}
              height={5}
              priority
            />
            <Image
              src="/framer-motion.png"
              alt="Framer Motion logo"
              width={30}
              height={5}
              priority
            />
            <a href="https://www.weatherapi.com/" title="Free Weather API">
              <h1 className="font-medium text-xs">WeatherAPI</h1>
            </a>
          </div>
        </div>

        <h1 className="flex justify-center items-center opacity-60 font-medium text-[10px]">
          Creation • Eric Sia
        </h1>
      </motion.footer>
    </div>
  );
}
