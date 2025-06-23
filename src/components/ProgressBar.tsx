import React from "react";

type ProgressBarProps = {
  value: number; // percent (0-100)
  color: string;
  background: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ value, color, background }) => (
  <div className="w-full h-2 rounded" style={{ background }}>
    <div
      className="h-2 rounded"
      style={{
        width: `${value}%`,
        background: color,
        transition: "width 0.4s",
      }}
    />
  </div>
);

export default ProgressBar;