import React, { useContext } from "react";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const BenefitsList: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <div className="w-full mt-6">
      <div className="flex flex-col items-center mb-6">
        <div className="w-full flex flex-col">
        <div
          className="font-semibold text-base mb-2"
          style={{ color: colors.textAccent }}
        >
          Your program will also work on:
        </div>
        <ul className="flex flex-col gap-2 items-center w-full max-w-xs">
          <li className="flex items-center gap-2 w-full">
            <span
              className="text-xl rounded-full border w-7 h-7 flex items-center justify-center"
              style={{
                color: colors.accent2,
                background: colors.cardBackground,
                borderColor: colors.accent2,
              }}
            >
              ✔
            </span>
            <span
              className="font-medium text-base"
              style={{ color: colors.textAccent }}
            >
              Improving Digestion
            </span>
          </li>
          <li className="flex items-center gap-2 w-full">
            <span
              className="text-xl rounded-full border w-7 h-7 flex items-center justify-center"
              style={{
                color: colors.accent2,
                background: colors.cardBackground,
                borderColor: colors.accent2,
              }}
            >
              ✔
            </span>
            <span
              className="font-medium text-base"
              style={{ color: colors.textAccent }}
            >
              Toning Muscles
            </span>
          </li>
          <li className="flex items-center gap-2 w-full">
            <span
              className="text-xl rounded-full border w-7 h-7 flex items-center justify-center"
              style={{
                color: colors.accent2,
                background: colors.cardBackground,
                borderColor: colors.accent2,
              }}
            >
              ✔
            </span>
            <span
              className="font-medium text-base"
              style={{ color: colors.textAccent }}
            >
              Mental Wellness Reset
            </span>
          </li>
          <li className="flex items-center gap-2 w-full">
            <span
              className="text-xl rounded-full border w-7 h-7 flex items-center justify-center"
              style={{
                color: colors.accent2,
                background: colors.cardBackground,
                borderColor: colors.accent2,
              }}
            >
              ✔
            </span>
            <span
              className="font-medium text-base"
              style={{ color: colors.textAccent }}
            >
              Physical Endurance Boost
            </span>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsList;