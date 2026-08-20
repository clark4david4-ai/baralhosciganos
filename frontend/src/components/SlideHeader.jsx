import React from "react";
import { Home, Download, BookOpen } from "lucide-react";

const SlideHeader = ({ onIndexOpen, onHome, onDownload }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 pointer-events-none">
      <button
        onClick={onHome}
        className="pointer-events-auto flex items-center gap-2 text-[13px] tracking-[0.28em] uppercase text-[#7A6A55] hover:text-[#4A3728] transition-colors"
        aria-label="Início"
      >
        <Home className="w-5 h-5" strokeWidth={1.4} />
        <span className="font-medium">Baralho Cigano</span>
      </button>

      <div className="pointer-events-auto flex items-center gap-8">
        <button
          onClick={onDownload}
          className="flex items-center gap-2 text-[13px] tracking-[0.28em] uppercase text-[#7A6A55] hover:text-[#4A3728] transition-colors"
        >
          <Download className="w-5 h-5" strokeWidth={1.4} />
          <span className="font-medium">Baixar PDF</span>
        </button>
        <button
          onClick={onIndexOpen}
          className="flex items-center gap-2 text-[13px] tracking-[0.28em] uppercase text-[#7A6A55] hover:text-[#4A3728] transition-colors"
        >
          <span className="font-medium">Índice</span>
          <BookOpen className="w-5 h-5" strokeWidth={1.4} />
        </button>
      </div>
    </header>
  );
};

export default SlideHeader;
