// "use client";
// import { motion } from "framer-motion";
// import Confetti from "react-confetti";
// import { useEffect, useState } from "react";
// import MusicToggle from "./MusicToggle";

// export default function Hero() {
//     const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//     useEffect(() => {
//         setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     }, []);

//     return (
//         <section className="bg-black w-full">
//             <section className="container mx-auto flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden">
//                 <Confetti width={windowSize.width} height={windowSize.height} className="bg-black w-full min-h-screen" />

//                 <motion.h1
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     className="text-5xl md:text-7xl font-bold z-50 flex
//         "
//                 >
//                     🎉<span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent"> Happy Birthday, <span className=" bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 
//              bg-clip-text text-transparent">Aradhya</span> </span> 🎂

//                 </motion.h1>

//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 1, duration: 1 }}
//                     className="mt-4 text-lg md:text-2xl text-gray-600 z-50"
//                 >
//                     Wishing you joy, laughter & endless memories 💖
//                 </motion.p>
//                 <MusicToggle />
//             </section>
//         </section>
//     );
// }



// "use client";
// import { motion } from "framer-motion";
// import Confetti from "react-confetti";
// import { useEffect, useRef, useState } from "react";
// import MusicToggle from "./MusicToggle";
// import Guestbook from "./Guestbook";
// import MusicPlayer from "./MusicPlayer";
// import song from "../public/mp3/pal-do-pal-ka-ye-Safar.mp3"

// export default function Hero() {
//     const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//     const [isOpened, setIsOpened] = useState(false);
//     useEffect(() => {
//         setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     }, []);

//     const [activeSong, setActiveSong] = useState(null);
//     const sectionRef = useRef();

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) setActiveSong("/mp3/Hadd-kar-di-aapne.mp3"); // Hero section song
//             },
//             { threshold: 0.5 } // 50% visible
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);

//         return () => observer.disconnect();
//     }, []);

//     // Floating balloons data
//     const balloons = ["🎈", "🎈", "🎈", "🎈", "🎈"];

//     return (
//         <section className="bg-black w-full relative overflow-hidden">
//             <section className="container mx-auto flex flex-col items-center justify-center min-h-screen text-center relative">
//                 {/* Confetti */}
//                 <Confetti
//                     width={windowSize.width}
//                     height={windowSize.height}
//                     className="bg-black w-full min-h-screen"
//                 />

//                 {/* Floating balloons */}
//                 {balloons.map((b, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute text-4xl md:text-5xl"
//                         initial={{ y: "100vh", x: Math.random() * windowSize.width }}
//                         animate={{ y: "-20vh" }}
//                         transition={{
//                             duration: 10 + i * 2,
//                             repeat: Infinity,
//                             ease: "linear",
//                         }}
//                     >
//                         {b}
//                     </motion.div>
//                 ))}

//                 {/* Title */}
//                 <motion.h1
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     className="text-5xl mt-14 md:text-7xl font-bold z-50"
//                 >
//                     🎉
//                     <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
//                         Happy Birthday,{" "}
//                         <span className="bg-gradient-to-r from-green-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
//                             Srija
//                         </span>
//                     </span>
//                     🎉
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 1, duration: 1 }}
//                     className="mt-4 text-lg md:text-2xl text-gray-400 z-50"
//                 >
//                     Wishing you joy, laughter & endless memories 💖
//                 </motion.p>

//                 {/* Music toggle */}
//                 <div className="mt-6 z-50">
//                     {/* <MusicToggle /> */}
//                     <MusicPlayer src="/mp3/Hadd-kar-di-aapne.mp3" play={activeSong === "/mp3/Hadd-kar-di-aapne.mp3"} />
//                 </div>

//                 {/* Animated Cake */}
//                 <motion.div
//                     className="mt-10 text-6xl md:text-8xl z-50"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 1.2, type: "spring" }}
//                 >
//                     🎂
//                 </motion.div>

//                 {/* Call to action button */}
//                 <motion.button
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 2 }}
//                     className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 z-50"
//                     onClick={() => setIsOpened(true)}
//                 >
//                     💌 Leave a Wish
//                 </motion.button>
//             </section>

//             {/* Modal */}
//             {isOpened && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
//                     <motion.div
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                         className="bg-white rounded-2xl shadow-lg w-lg p-6 px-2 relative"
//                     >
//                         {/* Close Button */}
//                         <button
//                             onClick={() => setIsOpened(false)}
//                             className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
//                         >
//                             ✖
//                         </button>

//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                             ✨ Leave your Birthday Wish ✨
//                         </h2>
//                         <Guestbook setIsOpened={setIsOpened} />
//                         {/* <textarea
//               placeholder="Write your wish here..."
//               className="w-full h-32 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />

//             <button
//               onClick={() => {
//                 alert("Wish Submitted 🎉");
//                 setIsOpened(false);
//               }}
//               className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
//             >
//               Send Wish 💖
//             </button> */}
//                     </motion.div>
//                 </div>
//             )}
//         </section>
//     );
// }




// "use client";
// import { motion } from "framer-motion";
// import Confetti from "react-confetti";
// import { useEffect, useRef, useState } from "react";
// import MusicToggle from "./MusicToggle";
// import Guestbook from "./Guestbook";
// import MusicPlayer from "./MusicPlayer";
// // import song from "../public/mp3/pal-do-pal-ka-ye-Safar.mp3"

// export default function Hero() {
//     const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//     const [isOpened, setIsOpened] = useState(false);
//     useEffect(() => {
//         setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     }, []);

//     const [activeSong, setActiveSong] = useState(null);
//     const sectionRef = useRef();


// useEffect(() => {
//   const handleFirstInteraction = () => {
//     const audio = document.querySelector("audio");
//     if (audio) audio.play().catch(() => {});
//     window.removeEventListener("scroll", handleFirstInteraction);
//     window.removeEventListener("click", handleFirstInteraction);
//   };

//   window.addEventListener("scroll", handleFirstInteraction);
//   window.addEventListener("click", handleFirstInteraction);

//   return () => {
//     window.removeEventListener("scroll", handleFirstInteraction);
//     window.removeEventListener("click", handleFirstInteraction);
//   };
// }, []);



//     // Floating balloons data
//     const balloons = ["🎈", "🎈", "🎈", "🎈", "🎈"];

//     return (
//         <section className="bg-black w-full relative overflow-hidden">
//             <section className="container mx-auto flex flex-col items-center justify-center min-h-screen text-center relative">
//                 {/* Confetti */}
//                 <Confetti
//                     width={windowSize.width}
//                     height={windowSize.height}
//                     className="bg-black w-full min-h-screen"
//                 />

//                 {/* Floating balloons */}
//                 {balloons.map((b, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute text-4xl md:text-5xl"
//                         initial={{ y: "100vh", x: Math.random() * windowSize.width }}
//                         animate={{ y: "-20vh" }}
//                         transition={{
//                             duration: 10 + i * 2,
//                             repeat: Infinity,
//                             ease: "linear",
//                         }}
//                     >
//                         {b}
//                     </motion.div>
//                 ))}

//                 {/* Title */}
//                 <motion.h1
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     className="text-5xl mt-14 md:text-7xl font-bold z-50"
//                 >
//                     🎉
//                     <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
//                         Happy Birthday,{" "}
//                         <span className="bg-gradient-to-r from-green-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
//                             Srija
//                         </span>
//                     </span>
//                     🎉
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 1, duration: 1 }}
//                     className="mt-4 text-lg md:text-2xl text-gray-400 z-50"
//                 >
//                     Wishing you joy, laughter & endless memories 💖
//                 </motion.p>

//                 {/* Music toggle */}
//                 <div className="mt-6 z-50">
//                     {/* <MusicToggle /> */}
//                     {/* <MusicPlayer src="/mp3/Hadd-kar-di-aapne.mp3" play={activeSong === "/mp3/Hadd-kar-di-aapne.mp3"} /> */}
//                     <MusicPlayer src="/mp3/jism-se-jaan.mp3" play={activeSong === "/mp3/jism-se-jaan.mp3"} />
//                 </div>

//                 {/* Animated Cake */}
//                 <motion.div
//                     className="mt-10 text-6xl md:text-8xl z-50"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 1.2, type: "spring" }}
//                 >
//                     🎂
//                 </motion.div>

//                 {/* Call to action button */}
//                 <motion.button
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 2 }}
//                     className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 z-50"
//                     onClick={() => setIsOpened(true)}
//                 >
//                     💌 Leave a Wish
//                 </motion.button>
//             </section>

//             {/* Modal */}
//             {isOpened && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
//                     <motion.div
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                         className="bg-white rounded-2xl shadow-lg w-lg p-6 px-2 relative"
//                     >
//                         {/* Close Button */}
//                         <button
//                             onClick={() => setIsOpened(false)}
//                             className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
//                         >
//                             ✖
//                         </button>

//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                             ✨ Leave your Birthday Wish ✨
//                         </h2>
//                         <Guestbook setIsOpened={setIsOpened} />
//                     </motion.div>
//                 </div>
//             )}
//         </section>
//     );
// }










// Hero.jsx
"use client";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import SectionMusic from "./SectionMusic";

export default function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [quoteIndex, setQuoteIndex] = useState(0);

  const balloons = ["🎈", "🎈", "🎈", "🎈", "🎈"];

  // Rotating wishes/quotes
  const quotes = [
    "🌸 May your smile shine brighter this year!",
    "🌟 Here’s to adventures, love & laughter!",
    "💖 Another year older, wiser, and more amazing!",
    "🎶 May your life be filled with sweet melodies!",
  ];

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionMusic src="/mp3/pal-do-pal-ka-ye-Safar.mp3">
      <section className="bg-black w-full relative overflow-hidden">
        <section className="container mx-auto flex flex-col items-center justify-center min-h-screen text-center relative px-4">
          {/* 🎉 Confetti */}
          <Confetti width={windowSize.width} height={windowSize.height} />

          {/* 🎈 Floating balloons */}
          {balloons.map((b, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl md:text-5xl"
              initial={{ y: "100vh", x: Math.random() * windowSize.width }}
              animate={{ y: "-20vh" }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {b}
            </motion.div>
          ))}

          {/* 🎂 Title */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl mt-14 md:text-7xl font-bold z-50"
          >
            🎉<span className="bg-gradient-to-tr from-[#f545ae] via-[#81be4e] to-[#42d9f5] bg-clip-text text-transparent font-extrabold">
              Happy Birthday,{" "}
              <span className="bg-gradient-to-tr from-[#00ff94] via-[#ffea00] to-[#ff4d6d] bg-clip-text text-transparent font-extrabold">
                Srija
              </span>
            </span>
            🎉
          </motion.h1>

          {/* 💌 Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-4 text-lg md:text-2xl text-gray-400 z-50 max-w-2xl"
          >
            Wishing you joy, laughter & endless memories 💖 <br />
            May this year be filled with love, success, and happiness ✨
          </motion.p>

          {/* 🎂 Cake Emoji */}
          <motion.div
            className="mt-10 text-6xl md:text-8xl z-50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            🎂
          </motion.div>
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-pink-400 italic z-50"
          >
            {quotes[quoteIndex]}
          </motion.p>
        </section>
      </section>
    </SectionMusic>
  );
}
