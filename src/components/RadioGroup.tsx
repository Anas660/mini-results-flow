import React, { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: React.ReactNode;
  name: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const RadioGroup: React.FC<Props> = ({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <fieldset
      className="mb-4"
      aria-required={required}
      aria-label={typeof label === "string" ? label : undefined}
    >
      <legend
        className="block text-sm font-medium mb-1"
        style={{ color: colors.textPrimary }}
      >
        {label}
      </legend>
      <div className="flex gap-4">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-1 cursor-pointer"
            style={{ color: colors.textPrimary }}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={onChange}
              required={required}
              aria-required={required}
              style={{
                accentColor: colors.accent,
              }}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default RadioGroup;
