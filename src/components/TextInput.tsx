import React, { useContext, useState } from "react";
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
  const [touched, setTouched] = useState(false);

  // Show validation if value is negative and type is number
  const isNegative =
    type === "number" &&
    value !== "" &&
    !isNaN(Number(value)) &&
    Number(value) < 0;

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
        onChange={(e) => {
          onChange(e);
          setTouched(true);
        }}
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
      {isNegative && touched && (
        <div className="text-xs mt-1" style={{ color: colors.accent2 }}>
          Value cannot be negative.
        </div>
      )}
    </div>
  );
};

export default TextInput;