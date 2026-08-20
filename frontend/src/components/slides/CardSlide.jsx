import React, { useState } from "react";
import { ZoomIn, X } from "lucide-react";
import Ornament from "../Ornament";

// Decorative Lenormand card visual (SVG-based, no external images)
const CardIllustration = ({ number, name, className = "" }) => {
  return (
    <div
      className={`relative bg-gradient-to-b from-[#F5E9D3] to-[#E8D6B5] border border-[rgba(184,152,92,0.6)] shadow-[0_10px_30px_-8px_rgba(74,55,40,0.35)] aspect-[3/5] flex flex-col ${className}`}
    >
      {/* Corners */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[rgba(184,152,92,0.5)]" />
      <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[rgba(184,152,92,0.5)]" />
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-[rgba(184,152,92,0.5)]" />
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-[rgba(184,152,92,0.5)]" />

      {/* Number top corners */}
      <div className="absolute top-4 left-4 text-[#8B2020] font-serif font-bold text-lg">
        {String(number).padStart(2, "0")}
      </div>
      <div className="absolute top-4 right-4 text-[#8B2020] font-serif font-bold text-lg rotate-180">
        {String(number).padStart(2, "0")}
      </div>

      {/* Center emblem */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl text-[#8B2020]/70 mb-3 font-serif">✦</div>
        <div className="w-16 h-px bg-[rgba(184,152,92,0.6)] mb-3" />
        <h3
          className="text-2xl text-[#4A3728] font-normal"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {name}
        </h3>
        <div className="w-16 h-px bg-[rgba(184,152,92,0.6)] mt-3" />
        <p className="mt-4 text-[9px] tracking-[0.3em] uppercase text-[#7A6A55]">
          Le Petit Lenormand
        </p>
      </div>
    </div>
  );
};

const CardSlide = ({ data }) => {
  const [zoomed, setZoomed] = useState(false);
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <>
      <div className="w-full flex items-center justify-center px-8">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
          {/* Card image */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setZoomed(true)}
              className="group relative w-64 md:w-72 cursor-zoom-in"
              aria-label="Ampliar carta"
            >
              <CardIllustration number={data.cardNumber} name={data.title} />
              <span className="absolute top-3 right-3 flex items-center gap-1 bg-[#F1E7D0]/90 px-2 py-1 border border-[rgba(184,152,92,0.4)] text-[9px] tracking-[0.25em] uppercase text-[#7A6A55] opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3 h-3" strokeWidth={1.4} />
                Ampliar
              </span>
            </button>
            <button
              onClick={() => setZoomed(true)}
              className="mt-4 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#7A6A55] hover:text-[#4A3728] transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5" strokeWidth={1.4} />
              Clique para ampliar
            </button>
          </div>

          {/* Text side */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#B8985C] font-sans font-medium">
              Carta {pad(data.cardNumber)} de {data.cardTotal}
            </p>
            <h1
              className="mt-3 text-5xl md:text-6xl font-normal text-[#3E2C1E] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {data.title}
            </h1>
            <Ornament width={140} />
            <p
              className="mt-6 text-[17px] leading-[1.75] text-[#4A3728]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {data.text}
            </p>
          </div>
        </div>
      </div>

      {/* Zoom modal */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[60] bg-[#3a2a1a]/80 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setZoomed(false)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setZoomed(false)}
            aria-label="Fechar"
          >
            <X className="w-8 h-8" strokeWidth={1.4} />
          </button>
          <div className="w-[min(80vh,420px)]" onClick={(e) => e.stopPropagation()}>
            <CardIllustration number={data.cardNumber} name={data.title} />
          </div>
        </div>
      )}
    </>
  );
};

export default CardSlide;
