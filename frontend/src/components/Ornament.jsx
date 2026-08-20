import React from "react";

// Decorative divider: line — small "+" or diamond — line
export const Ornament = ({ width = 180, color = "rgba(184, 152, 92, 0.6)", showPlus = true }) => {
  return (
    <div className="flex items-center justify-center gap-3 my-4" style={{ width }}>
      <span
        className="flex-1 h-px"
        style={{ background: color }}
      />
      {showPlus && (
        <span
          className="text-lg leading-none select-none"
          style={{ color: "rgba(184, 152, 92, 0.85)", fontFamily: "serif" }}
        >
          &#10010;
        </span>
      )}
      <span
        className="flex-1 h-px"
        style={{ background: color }}
      />
    </div>
  );
};

export default Ornament;
