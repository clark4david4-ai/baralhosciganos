import React, { useState } from "react";
import { ZoomIn, X } from "lucide-react";
import Ornament from "../Ornament";

const CardSlide = ({ data }) => {
  const [zoomed, setZoomed] = useState(false);
  const pad = (n) => String(n).padStart(2, "0");
  const imgSrc = `/cards/card-${pad(data.cardNumber)}.jpeg`;

  return (
    <>
      <div className="w-full flex items-center justify-center px-8">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
          {/* Card image */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setZoomed(true)}
              className="group relative w-64 md:w-72 cursor-zoom-in transition-transform duration-500 hover:scale-[1.02]"
              aria-label={`Ampliar carta ${data.title}`}
            >
              <div className="relative overflow-hidden shadow-[0_18px_45px_-14px_rgba(74,55,40,0.55)] border border-[rgba(184,152,92,0.5)] bg-[#F5E9D3]">
                <img
                  src={imgSrc}
                  alt={`Carta ${data.cardNumber} — ${data.title}`}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <span className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#F1E7D0]/95 px-2.5 py-1 border border-[rgba(184,152,92,0.5)] text-[9px] tracking-[0.28em] uppercase text-[#7A6A55] opacity-0 group-hover:opacity-100 transition-opacity">
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
          className="fixed inset-0 z-[60] bg-[#3a2a1a]/85 backdrop-blur-sm flex items-center justify-center p-8 animate-fadeIn"
          onClick={() => setZoomed(false)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-white/85 hover:text-white transition-colors"
            onClick={() => setZoomed(false)}
            aria-label="Fechar"
          >
            <X className="w-8 h-8" strokeWidth={1.4} />
          </button>
          <div
            className="max-h-[90vh] w-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imgSrc}
              alt={`Carta ${data.cardNumber} — ${data.title}`}
              className="max-h-[90vh] w-auto shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-[rgba(184,152,92,0.4)]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CardSlide;
