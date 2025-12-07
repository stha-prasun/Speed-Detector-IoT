import { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import { Link } from "react-router-dom";

const MainCover: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x00ffff, // Globe main color
          backgroundColor: 0x0b0c10, // Dark background
          size: 1.2,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-screen flex items-center justify-start px-6 md:px-20 relative overflow-hidden"
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/50 pointer-events-none"></div>

      {/* Left side content */}
      <div className="relative z-10 max-w-xl text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl leading-tight animate-fadeIn">
          Speed Detection System
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-300 drop-shadow-md animate-fadeIn delay-500">
          Real-time monitoring and tracking with ESP32, ensuring precise speed
          detection.
        </p>
        <Link to='/login' className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 ease-in-out text-black font-semibold px-8 py-4 rounded-xl shadow-2xl transform hover:scale-105 animate-fadeIn delay-700">
          Get Started
        </Link>
      </div>

      {/* Tailwind custom animations */}
      <style>
        {`
          .animate-fadeIn {
            opacity: 0;
            animation: fadeIn 1s forwards;
          }
          .animate-fadeIn.delay-500 {
            animation-delay: 0.5s;
          }
          .animate-fadeIn.delay-700 {
            animation-delay: 0.7s;
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MainCover;
