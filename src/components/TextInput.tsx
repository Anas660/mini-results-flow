import React, { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext";

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
        className="w-full rounded px-3 py-2 transition"
        style={{
          background: colors.cardBackground,
          color: colors.textPrimary,
          border: `1px solid ${colors.cardBorder}`,
        }}
        aria-required={required}
        aria-label={typeof label === "string" ? label : undefined}
      />
    </div>
  );
};

export default TextInput;