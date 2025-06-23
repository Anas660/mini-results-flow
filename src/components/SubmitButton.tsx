import React from "react";
import { themeColors } from "../context/theme/ThemeContext";

type Colors = typeof themeColors.light;

const SubmitButton: React.FC<{
  isValid: boolean;
  colors: Colors;
  label: string;
}> = ({ isValid, colors, label }) => (
  <button
    type="submit"
    style={{
      background: colors.accent,
      color: colors.white,
      border: `1px solid ${colors.accent}`,
    }}
    className="w-full mt-4 text-lg font-semibold py-3 rounded-xl transition disabled:opacity-50 font-inter hover:opacity-90 focus:outline-none focus:ring-2 cursor-pointer"
    disabled={!isValid}
    aria-disabled={!isValid}
    aria-label={label}
  >
    {label}
  </button>
);

export default SubmitButton;