"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Cylinder, Sphere, Html } from "@react-three/drei";
import { useState } from "react";

function Candle({ position, lit }) {
  return (
    <group position={position}>
      {/* Candle body */}
      <Cylinder args={[0.1, 0.1, 1]} position={[0, 0.5, 0]} color="white" />
      {/* Flame (only if lit) */}
      {lit && (
        <Sphere args={[0.15, 0.15, 0.15]} position={[0, 1.1, 0]}>
          <meshStandardMaterial emissive="orange" emissiveIntensity={2} />
        </Sphere>
      )}
    </group>
  );
}

function Cake({ candlesLit }) {
  return (
    <group>
      {/* Cake Base */}
      <Cylinder args={[2, 2, 1, 32]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="pink" />
      </Cylinder>
      {/* Frosting */}
      <Cylinder args={[2.1, 2.1, 0.2, 32]} position={[0, 1.1, 0]}>
        <meshStandardMaterial color="white" />
      </Cylinder>
      {/* Candles */}
      <Candle position={[0.8, 1.2, 0]} lit={candlesLit} />
      <Candle position={[-0.8, 1.2, 0]} lit={candlesLit} />
      <Candle position={[0, 1.2, 0.8]} lit={candlesLit} />
    </group>
  );
}

export default function BirthdayCake() {
  const [candlesLit, setCandlesLit] = useState(true);

  return (
    <div className="h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <OrbitControls />
        <Cake candlesLit={candlesLit} />
      </Canvas>

      {/* Toggle Button */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <button
          onClick={() => setCandlesLit(false)}
          className="px-6 py-3 rounded-xl bg-pink-500 text-white shadow hover:scale-105 transition"
        >
          🎂 Blow Out Candles
        </button>
      </div>
    </div>
  );
}
