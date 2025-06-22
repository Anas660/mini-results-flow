
import React from "react";

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
}) => (
  <fieldset className="mb-4" aria-required={required} aria-label={typeof label === "string" ? label : undefined}>
    <legend className="block text-sm font-medium text-primary mb-1">{label}</legend>
    <div className="flex gap-4">
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-1 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={onChange}
            required={required}
            aria-required={required}
            className="accent-accent"
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

export default RadioGroup;
