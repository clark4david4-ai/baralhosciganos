import React from "react";
import Ornament from "../Ornament";

// Slide 1 - Cover
export const CoverSlide = ({ data }) => (
  <div className="w-full flex items-center justify-center px-8">
    <div className="relative w-full max-w-3xl">
      {/* Decorative frame */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[rgba(184,152,92,0.5)]" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[rgba(184,152,92,0.5)]" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[rgba(184,152,92,0.5)]" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[rgba(184,152,92,0.5)]" />
      </div>

      <div className="text-center py-16 px-12 animate-fadeIn">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#B8985C] font-sans font-medium">
          {data.section}
        </p>
        <div className="flex justify-center"><Ornament /></div>
        <h1
          className="text-6xl md:text-7xl font-normal text-[#3E2C1E] leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {data.title}
        </h1>
        <p
          className="mt-4 text-2xl italic text-[#5C4A38]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {data.subtitle}
        </p>
        <div className="flex justify-center"><Ornament /></div>
        <p className="mt-3 text-base text-[#4A3728]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {data.description}
        </p>
        <p className="mt-5 text-[11px] tracking-[0.4em] uppercase text-[#8B2020] font-sans font-medium">
          {data.author}
        </p>
        <p
          className="mt-6 text-sm italic text-[#7A6A55] max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {data.dedication}
        </p>
        <p className="mt-8 text-[10px] tracking-[0.3em] uppercase text-[#B8985C] font-sans">
          01 &middot; 57
        </p>
      </div>
    </div>
  </div>
);

// Section title slide
export const SectionTitleSlide = ({ data }) => (
  <div className="w-full flex items-center justify-center px-8">
    <div className="text-center max-w-3xl animate-fadeIn">
      <div className="flex justify-center"><Ornament /></div>
      <p className="text-[10px] tracking-[0.4em] uppercase text-[#B8985C] font-sans font-medium mt-2">
        {data.section}
      </p>
      <h1
        className="mt-6 text-5xl md:text-6xl font-normal text-[#3E2C1E] leading-tight"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {data.title}
      </h1>
      {data.subtitle && (
        <p
          className="mt-4 text-xl italic text-[#5C4A38]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {data.subtitle}
        </p>
      )}
      <div className="flex justify-center"><Ornament /></div>
    </div>
  </div>
);

// Content slide - section label + title + paragraphs
export const ContentSlide = ({ data }) => (
  <div className="w-full flex items-center justify-center px-8">
    <div className="max-w-3xl w-full animate-fadeIn">
      <p className="text-[10px] tracking-[0.4em] uppercase text-[#B8985C] font-sans font-medium">
        {data.section}
      </p>
      <h1
        className="mt-3 text-4xl md:text-5xl font-normal text-[#3E2C1E] leading-tight"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {data.title}
      </h1>
      <Ornament width={140} />
      <div
        className="mt-6 space-y-5 text-[17px] leading-[1.75] text-[#4A3728]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {data.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  </div>
);

// Closing slide
export const ClosingSlide = ({ data }) => (
  <div className="w-full flex items-center justify-center px-8">
    <div className="text-center max-w-2xl animate-fadeIn">
      <p className="text-[10px] tracking-[0.4em] uppercase text-[#B8985C] font-sans font-medium">
        {data.section}
      </p>
      <div className="flex justify-center"><Ornament /></div>
      <h1
        className="text-6xl md:text-7xl font-normal text-[#3E2C1E]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {data.title}
      </h1>
      <div className="flex justify-center"><Ornament /></div>
      <div
        className="mt-4 space-y-4 text-lg italic text-[#5C4A38] leading-relaxed"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {data.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="mt-10 text-[11px] tracking-[0.4em] uppercase text-[#8B2020] font-sans font-medium">
        {data.author}
      </p>
      <p
        className="mt-3 text-base italic text-[#7A6A55]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {data.farewell}
      </p>
    </div>
  </div>
);
