import React, { useEffect } from "react";
import { X } from "lucide-react";
import { sections, slides } from "../data/slides";

const IndexModal = ({ open, onClose, onSelect, current }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const findSlideTitle = (n) => {
    const s = slides.find((sl) => sl.n === n);
    if (!s) return "";
    return s.title;
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-[#3a2a1a]/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[440px] bg-[#F1E7D0] shadow-2xl transition-transform duration-500 ease-out overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        <div className="sticky top-0 z-10 bg-[#F1E7D0] px-8 pt-8 pb-4 border-b border-[rgba(184,152,92,0.25)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8985C] font-sans">
                Índice
              </p>
              <h2 className="text-4xl font-normal text-[#4A3728] mt-2">Sumário</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#7A6A55] hover:text-[#4A3728] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" strokeWidth={1.4} />
            </button>
          </div>
        </div>

        <div className="px-8 py-6 space-y-8">
          {sections.map((sec, idx) => (
            <div key={sec.id}>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8985C] font-sans font-medium mb-4">
                {sec.name}
              </p>
              <ul className="space-y-3">
                {sec.slides.map((n) => {
                  const title = findSlideTitle(n);
                  if (!title) return null;
                  const isActive = n === current;
                  return (
                    <li key={n}>
                      <button
                        onClick={() => {
                          onSelect(n);
                          onClose();
                        }}
                        className={`w-full flex items-baseline gap-4 text-left group ${
                          isActive ? "text-[#7A1F1F]" : "text-[#4A3728]"
                        }`}
                      >
                        <span className="text-[12px] tracking-[0.2em] font-sans font-medium text-[#B8985C] w-8 shrink-0">
                          {pad(n)}
                        </span>
                        <span className="text-xl leading-snug group-hover:text-[#7A1F1F] transition-colors">
                          {title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              {idx < sections.length - 1 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                  <span className="h-px w-16 bg-[rgba(184,152,92,0.4)]" />
                  <span className="text-[#B8985C] text-sm">&#10010;</span>
                  <span className="h-px w-16 bg-[rgba(184,152,92,0.4)]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default IndexModal;
