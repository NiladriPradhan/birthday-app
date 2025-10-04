// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { Image } from "lucide-react";
// import MusicPlayer from "./MusicPlayer";

// const images = [
//   "/images/sr5.png",
//   "/images/sr1.png",
//   "/images/sr2.png",
//   "/images/sr3.png",
//   "/images/sr15.png",
//   "/images/sr4.png",
//   "/images/sr9.png",
//   "/images/sr6.png",
//   "/images/sr17.png",
//   "/images/sr20.png",
//   "/images/sr8.png",
//   "/images/sr12.png",
//   "/images/sr16.png",
//   "/images/sr10.png",
//   "/images/sr11.png",
//   "/images/sr14.png",
//   "/images/sr13.png",
// ];

// export default function Gallery() {
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [activeSong, setActiveSong] = useState(null);

//   useEffect(() => {
//     const handleFirstInteraction = () => {
//       // set song only once
//       if (!activeSong) {
//         setActiveSong("/mp3/pal-do-pal-ka-ye-Safar.mp3");
//       }

//       window.removeEventListener("scroll", handleFirstInteraction);
//       window.removeEventListener("click", handleFirstInteraction);
//     };

//     window.addEventListener("scroll", handleFirstInteraction, { once: true });
//     window.addEventListener("click", handleFirstInteraction, { once: true });

//     return () => {
//       window.removeEventListener("scroll", handleFirstInteraction);
//       window.removeEventListener("click", handleFirstInteraction);
//     };
//   }, [activeSong]);

//   return (
//     <section className="w-full bg-white">
//       <section className="container mx-auto py-16 px-6 bg-white">
//         <div className="mt-6 z-50">
//           <MusicPlayer
//             src="/mp3/pal-do-pal-ka-ye-Safar.mp3"
//             play={activeSong === "/mp3/pal-do-pal-ka-ye-Safar.mp3"}
//           />
//         </div>

//         <h2 className="flex items-center justify-center text-6xl font-semibold text-center text-gray-900">
//           <Image className="w-12 h-12 text-gray-500 pr-4" /> Beautiful Memories
//         </h2>
//         <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mt-2 mb-16">
//           A collection of unforgettable moments captured in time, filled with joy, laughter, and cherished experiences that will always stay close to the heart.
//         </p>

//         {/* Masonry Grid */}
//         <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-6">
//           {images.map((src, i) => (
//             <motion.img
//               key={i}
//               src={src}
//               alt="memory"
//               className="rounded-xl shadow-lg cursor-pointer w-xl hover:shadow-2xl hover:brightness-110 transform transition duration-300"
//               whileHover={{ rotate: 1, scale: 1.05 }}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               onClick={() => setSelectedImg(src)}
//             />
//           ))}
//         </div>

//         {/* Lightbox Modal */}
//         {selectedImg && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <motion.img
//               src={selectedImg}
//               alt="Selected memory"
//               className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 120 }}
//             />
//             <button
//               className="absolute top-6 right-6 text-white text-3xl font-bold"
//               onClick={() => setSelectedImg(null)}
//             >
//               ✕
//             </button>
//           </motion.div>
//         )}
//       </section>
//     </section>
//   );
// }



// Gallery.jsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Image } from "lucide-react";
import SectionMusic from "./SectionMusic";

const images = ["/images/sr5.png", "/images/sr1.png", "/images/sr2.png", "/images/sr3.png", "/images/sr15.png", "/images/sr4.png"];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <SectionMusic src="/mp3/pal-do-pal-ka-ye-Safar.mp3">
      <section className="w-full bg-white">
        <section className="container mx-auto py-16 px-6 bg-white">
          <h2 className="flex items-center justify-center text-6xl font-semibold text-center text-gray-900">
            <Image className="w-12 h-12 text-gray-500 pr-4" /> Beautiful Memories
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mt-2 mb-16">
            A collection of unforgettable moments captured in time, filled with joy, laughter, and cherished experiences.
          </p>

          <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-6">
            {images.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="memory"
                className="rounded-xl shadow-lg cursor-pointer w-xl hover:shadow-2xl hover:brightness-110 transform transition duration-300"
                whileHover={{ rotate: 1, scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelectedImg(src)}
              />
            ))}
          </div>

          {selectedImg && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.img
                src={selectedImg}
                alt="Selected memory"
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
              />
              <button
                className="absolute top-6 right-6 text-white text-3xl font-bold"
                onClick={() => setSelectedImg(null)}
              >
                ✕
              </button>
            </motion.div>
          )}
        </section>
      </section>
    </SectionMusic>
  );
}
