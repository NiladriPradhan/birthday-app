// SectionMusic.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import MusicPlayer from "./MusicPlayer";

export default function SectionMusic({ src, children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 } // 50% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} className="relative">
      {/* Each section owns its MusicPlayer */}
      <MusicPlayer src={src} play={inView} />
      {children}
    </section>
  );
}
