import React from "react";

type Props = {
  label: React.ReactNode; // <-- Changed from string to React.ReactNode
  name: string;
  value: number | "";
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: number }[];
  required?: boolean;
  placeholder?: string;
  className?: string;
};

const DropdownInput: React.FC<Props> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  placeholder = "Select...",
  className = "",
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-primary mb-1">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      aria-required={required}
      aria-label={typeof label === "string" ? label : undefined}
      className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-accent transition ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default DropdownInput;