import React, { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext";

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
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium mb-1"
        style={{ color: colors.textPrimary }}
      >
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
        className={`w-full rounded px-3 py-2 transition ${className}`}
        style={{
          background: colors.cardBackground,
          color: colors.textPrimary,
          border: `1px solid ${colors.cardBorder}`,
        }}
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
};

export default DropdownInput;