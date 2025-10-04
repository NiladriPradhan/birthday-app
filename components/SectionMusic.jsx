// // SectionMusic.jsx
// "use client";
// import { useEffect, useRef, useState } from "react";
// import MusicPlayer from "./MusicPlayer";

// export default function SectionMusic({ src, children }) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setInView(entry.isIntersecting),
//       { threshold: 0.5 } // 50% visible
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section ref={ref} className="relative">
//       {/* Each section owns its MusicPlayer */}
//       <MusicPlayer src={src} play={inView} />
//       {children}
//     </section>
//   );
// }




"use client";
import { useEffect, useRef, useState } from "react";
import MusicPlayer from "./MusicPlayer";

export default function SectionMusic({ src, children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    // Track screen size
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Intersection observer (start earlier with threshold 0.1)
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    // On desktop, auto-enable play
    if (windowWidth >= 768) {
      setCanPlay(true);
    }
  }, [windowWidth]);

  return (
    <section ref={ref} className="relative">
      {/* Show tap-to-play button ONLY on mobile */}
      {windowWidth < 768 && !canPlay && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-50">
          <button
            onClick={() => setCanPlay(true)}
            className="px-6 py-3 bg-pink-500 text-white rounded-full text-lg font-bold shadow-lg"
          >
            🎶 Tap to Play Music
          </button>
        </div>
      )}

      <MusicPlayer src={src} play={inView && canPlay} />
      {children}
    </section>
  );
}
