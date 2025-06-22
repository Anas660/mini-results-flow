import React from "react";

type Props = {
  label: React.ReactNode;
  name: string;
  value: number | "";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  step?: number;
  required?: boolean;
  trackColor?: string;
  thumbColor?: string;
  labelColor?: string;
  placeholder?: string;
  id?: string; // <-- Add this line
};

const SliderInput: React.FC<Props> = ({
  label,
  name,
  value,
  onChange,
  min,
  max,
  step = 1,
  required = false,
  trackColor,
  id, // <-- Add this line
}) => (
  <div className="mb-2">
    <label
      htmlFor={id || name}
      className="block text-sm font-medium mb-1"
    >
      {label}
    </label>
    <div className="flex items-center gap-2">
      <input
        type="range"
        id={id || name}
        name={name}
        min={min}
        max={max}
        value={value || 0}
        onChange={onChange}
        step={step}
        required={required}
        aria-required={required}
        aria-label={typeof label === "string" ? label : undefined}
        aria-valuenow={Number(value) || 0}
        aria-valuemin={min}
        aria-valuemax={max}
        className="w-full" // <-- Add this line
        style={{
          accentColor: trackColor || undefined,
        }}
      />
      <span className="w-12 text-right text-gray-700">{value}</span>
    </div>
  </div>
);

export default SliderInput;