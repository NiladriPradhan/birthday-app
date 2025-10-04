// MusicPlayer.jsx
"use client";
import { useEffect, useRef } from "react";

export default function MusicPlayer({ src, play }) {
  const audioRef = useRef();

  useEffect(() => {
    if (!audioRef.current) return;

    if (play) {
      // Try playing after a short delay
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay blocked, user interaction required");
        });
      }
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [play, src]);

  return <audio ref={audioRef} src={src} loop />;
}
