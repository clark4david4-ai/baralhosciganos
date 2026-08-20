import React, { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import SlideHeader from "../components/SlideHeader";
import SlideFooter from "../components/SlideFooter";
import IndexModal from "../components/IndexModal";
import CardSlide from "../components/slides/CardSlide";
import {
  CoverSlide,
  SectionTitleSlide,
  ContentSlide,
  ClosingSlide,
} from "../components/slides/BasicSlides";
import { slides, totalSlides } from "../data/slides";

const Presentation = () => {
  const [current, setCurrent] = useState(1);
  const [indexOpen, setIndexOpen] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (n) => {
      if (n < 1 || n > totalSlides) return;
      setDirection(n > current ? 1 : -1);
      setCurrent(n);
      // scroll top of content
      window.scrollTo({ top: 0, behavior: "instant" });
    },
    [current]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const onKey = (e) => {
      if (indexOpen) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") next();
      else if (e.key === "ArrowLeft" || e.key === "PageUp") prev();
      else if (e.key === "Home") goTo(1);
      else if (e.key === "End") goTo(totalSlides);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, indexOpen]);

  const slide = slides.find((s) => s.n === current);

  const renderSlide = () => {
    if (!slide) return null;
    switch (slide.type) {
      case "cover":
        return <CoverSlide data={slide} />;
      case "section":
        return <SectionTitleSlide data={slide} />;
      case "card":
        return <CardSlide data={slide} />;
      case "closing":
        return <ClosingSlide data={slide} />;
      case "content":
      default:
        return <ContentSlide data={slide} />;
    }
  };

  const handleDownload = () => {
    toast("Baixar PDF", {
      description: "O PDF completo estará disponível em breve.",
    });
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, #F1E5CB 0%, #E8DAB9 45%, #DDCCA5 100%)",
      }}
    >
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.65'/></svg>\")",
        }}
      />

      <SlideHeader
        onIndexOpen={() => setIndexOpen(true)}
        onHome={() => goTo(1)}
        onDownload={handleDownload}
      />

      {/* Slide viewport */}
      <main className="min-h-screen w-full flex items-center justify-center py-28">
        <div
          key={current}
          className="w-full"
          style={{
            animation: `${direction > 0 ? "slideInRight" : "slideInLeft"} 0.55s cubic-bezier(0.22, 1, 0.36, 1) both`,
          }}
        >
          {renderSlide()}
        </div>
      </main>

      <SlideFooter
        current={current}
        total={totalSlides}
        onPrev={prev}
        onNext={next}
      />

      <IndexModal
        open={indexOpen}
        onClose={() => setIndexOpen(false)}
        onSelect={goTo}
        current={current}
      />
    </div>
  );
};

export default Presentation;
