"use client";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play(); // wait for play to resolve
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Playback error:", err);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Hidden audio element */}
      {/* <audio ref={audioRef} src="/mp3/happy-birthday-401919.mp3" loop /> */}
      <audio ref={audioRef} src="/mp3/Hadd-kar-di-aapne.mp3" loop />


      {/* Toggle button */}
      <button
        onClick={toggleMusic}
        className="p-3 rounded-full bg-transparent text-pink-200 shadow-lg hover:scale-110 transition"
      >
        {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </button>
    </div>
  );
}
