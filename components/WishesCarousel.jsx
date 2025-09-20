"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const wishes = [
  { name: "Alice", msg: "🎉 Happy Birthday! Hope your day is magical ✨" },
  { name: "Bob", msg: "💖 Wishing you endless love & joy!" },
  { name: "Charlie", msg: "🥳 May this year bring you new adventures!" },
  { name: "Daisy", msg: "🎂 Enjoy your special day to the fullest!" },
];

export default function WishesCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % wishes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % wishes.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + wishes.length) % wishes.length);

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
        💌 Birthday Wishes
      </h2>

      <div className="relative max-w-xl mx-auto">
        {/* AnimatePresence handles exit + enter */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl text-center"
          >
            <p className="text-lg italic text-gray-700 mb-4">
              "{wishes[index].msg}"
            </p>
            <p className="font-semibold text-purple-600">
              – {wishes[index].name}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-purple-200"
        >
          <ChevronLeft className="w-6 h-6 text-purple-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-purple-200"
        >
          <ChevronRight className="w-6 h-6 text-purple-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {wishes.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
