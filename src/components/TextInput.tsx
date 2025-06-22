import React from "react";

type Props = {
  label: React.ReactNode;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  min?: number;
  max?: number;
  required?: boolean;
  step?: number;
  placeholder?: string;
};

const TextInput: React.FC<Props> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  min,
  max,
  required = false,
  step,
  placeholder,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-primary mb-1">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      required={required}
      step={step}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-accent transition"
      aria-required={required}
      aria-label={typeof label === "string" ? label : undefined}
    />
  </div>
);

export default TextInput;