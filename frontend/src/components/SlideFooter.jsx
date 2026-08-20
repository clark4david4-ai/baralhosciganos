import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SlideFooter = ({ current, total, onPrev, onNext }) => {
  const progress = (current / total) * 100;
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40">
      <div className="flex items-center justify-between px-8 pb-6 pt-4">
        <button
          onClick={onPrev}
          disabled={current === 1}
          className="flex items-center gap-2 px-6 py-3 border border-[rgba(184,152,92,0.35)] text-[13px] tracking-[0.28em] uppercase text-[#7A6A55] hover:text-[#4A3728] hover:border-[rgba(184,152,92,0.7)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[rgba(184,152,92,0.35)] disabled:hover:text-[#7A6A55]"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={1.4} />
          <span className="font-medium">Anterior</span>
        </button>

        <div className="text-[13px] tracking-[0.28em] uppercase text-[#7A6A55] font-medium">
          {pad(current)} · {pad(total)}
        </div>

        <button
          onClick={onNext}
          disabled={current === total}
          className="flex items-center gap-2 px-6 py-3 border border-[rgba(184,152,92,0.35)] text-[13px] tracking-[0.28em] uppercase text-[#7A6A55] hover:text-[#4A3728] hover:border-[rgba(184,152,92,0.7)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="font-medium">Próximo</span>
          <ChevronRight className="w-5 h-5" strokeWidth={1.4} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] w-full bg-[rgba(184,152,92,0.15)] overflow-hidden">
        <div
          className="h-full bg-[#7A1F1F] transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </footer>
  );
};

export default SlideFooter;
