"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Confetti from "react-confetti";

export default function Surprise() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      className="relative flex flex-col min-h-screen justify-center items-center py-20 px-6 text-center 
                 bg-[url('/images/surpricebg.png')] bg-cover bg-center bg-no-repeat 
                 before:absolute before:inset-0 
                 before:bg-gradient-to-r before:from-pink-400/50 before:via-gray-900/70 before:to-red-900/70 
                 before:z-0 overflow-hidden"
    >
      {/* Confetti effect */}
      {opened && <Confetti recycle={false} numberOfPieces={500} />}

      <div className="relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-white drop-shadow-lg">
          🎁 Your Surprise
        </h2>

        {opened ? (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="mt-10 container mx-auto"
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl font-extrabold 
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 
                         drop-shadow-[0_0_20px_rgba(255,192,203,0.7)] animate-pulse"
            >
              💖 Surprise Message: You are loved & cherished forever! 💖
            </motion.p>

            {/* Floating hearts animation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: -20, opacity: 1 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
              }}
              className="mt-6 text-5xl"
            >
              💕 💞 💕
            </motion.div>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            onClick={() => setOpened(true)}
            className="px-10 py-5 bg-white text-pink-600 font-extrabold text-xl 
                       rounded-2xl shadow-2xl hover:shadow-pink-500/50 
                       transition-all animate-bounce"
          >
            Open Gift 🎀
          </motion.button>
        )}
      </div>
    </section>
  );
}


