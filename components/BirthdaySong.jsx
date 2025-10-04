// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const lines = [
//   "Happy Birthday to you, my friend so true,",
//   "This day shines brighter, all because of you.",
//   "Laughter and smiles, memories we’ve made,",
//   "A bond like ours will never fade.",
//   "",
//   "Here’s to the dreams you’re chasing tonight,",
//   "May every candle bring wishes in sight.",
//   "With love and cheer, we’ll sing all along,",
//   "Happy Birthday, bestie—this is your song! 🎶🎂✨",
// ];

// const BirthdaySong = () => {
//   return (
//     <section className="py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 flex items-center justify-center">
//       <div className="max-w-2xl bg-white shadow-xl rounded-3xl p-8 text-center relative overflow-hidden">
//         <h2 className="text-3xl font-bold text-purple-700 mb-6 relative">
//           🎶 Birthday Song for You 🎂✨
//         </h2>

//         <div className="space-y-3">
//           {lines.map((line, index) => (
//             <motion.p
//               key={index}
//               className="text-lg font-medium text-gray-700"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 1, duration: 0.8 }}
//             >
//               {line}
//             </motion.p>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BirthdaySong;







"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import SectionMusic from "./SectionMusic";

// Load font
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

const lines = [
  "Happy Birthday to you, my friend so true,",
  "This day shines brighter, all because of you.",
  "Laughter and smiles, memories we’ve made,",
  "A bond like ours will never fade.",
  "",
  "Here’s to the dreams you’re chasing tonight,",
  "May every candle bring wishes in sight.",
  "With love and cheer, we’ll sing all along,",
  "Happy Birthday, bestie—this is your song!",
  "",
  "---Indrajit Shaw",
];

// Particle component (client-only)
const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [...Array(25)].map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      x: Math.random() * 100,
      size: Math.random() * 20 + 10,
      hue: Math.random() * 360,
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-70"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: `hsl(${p.hue}, 80%, 60%)`,
            left: `${p.x}%`,
          }}
          animate={{
            y: ["120vh", "-20vh"],
            x: [`${Math.random() * 10 - 5}vw`, `${Math.random() * 10 - 5}vw`],
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </>
  );
};

const BirthdaySong = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in viewport

  return (
    <SectionMusic src="/mp3/indra-audio.mp3">
      <section
        ref={ref}
        className="relative py-20 flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900"
      >
        {/* Animated Particles */}
        <Particles />

        {/* Poem Text */}
        <div className="relative z-10 px-6 text-center max-w-3xl">
          <h2
            className={`text-5xl sm:text-6xl font-bold mb-10 text-wjh ${dancing.className}`}
          >
            🎶 Birthday Song for You 🎂✨
          </h2>

          <div className="space-y-4">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                className={`text-2xl sm:text-3xl font-medium drop-shadow-lg ${dancing.className} bg-gradient-to-r from-pink-400 via-green-400 to-yellow-400 bg-clip-text text-transparent`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 1, duration: 20 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </section>
    </SectionMusic>
  );
};

export default BirthdaySong;
