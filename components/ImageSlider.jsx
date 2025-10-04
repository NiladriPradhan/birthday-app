"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionMusic from "./SectionMusic";
import { Image, X } from "lucide-react";

const images = [
  "/images/sr1.png",
  "/images/sr2.png",
  "/images/sr3.png",
  "/images/sr4.png",
  "/images/sr5.png",
  "/images/sr6.png",
  "/images/sr7.png",
  "/images/sr8.png",
];

export default function SingleRowSlider() {
  const [width, setWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setWidth(images.length * 25); // 4 images per screen
  }, []);

  return (
    <SectionMusic src="/mp3/jism-se-jaan.mp3">
      <div className="relative w-full mx-auto overflow-hidden rounded-2xl bg-white shadow-lg pt-6">
        <h2 className="flex items-center justify-center text-6xl font-semibold text-center text-gray-900 mb-4">
          <Image className="w-12 h-12 text-gray-500 pr-4" /> Beautiful Memories
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
          A collection of unforgettable moments captured in time, filled with
          joy, laughter, and cherished experiences.
        </p>

        {/* Single Row Slider */}
        <motion.div
          className="flex"
          animate={{ x: ["0%", `-${width}%`] }}
          transition={{
            ease: "linear",
            duration: 50, // Adjust duration for smooth scrolling
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} className="w-1/4 flex-shrink-0 p-2">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-[650px] h-[420px] object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </motion.div>

        {/* Modal / Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <button
              className="absolute top-6 right-6 bg-white p-2 rounded-full shadow-md"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-black" />
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen"
              className="max-w-5xl max-h-[80vh] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </SectionMusic>
  );
}
