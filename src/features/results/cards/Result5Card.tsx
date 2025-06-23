import React, { useContext } from "react";
import trophyImage from "../../../assets/result5.png";
import { useFormContext } from "../../../context/form/useFormContext";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const Result5Card: React.FC = () => {
  const { formData } = useFormContext();
  const { weightLossRate } = formData;
  const { colors } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: colors.cardBackground,
        borderColor: colors.cardBorder,
        color: colors.textPrimary,
      }}
      className="rounded-2xl shadow-xl border p-4 sm:p-8 w-full max-w-xl flex flex-col items-center mb-6"
    >
      {/* Icon */}
      <div className="flex justify-center items-center mb-2">
        <span className="text-[34px]">📉</span>
      </div>
      {/* Headline */}
      <h1
        className="text-center text-[34px] leading-[1.2em] font-semibold font-inter mb-1"
        style={{ color: colors.textPrimary }}
      >
        You Could Be Losing
        <br />
        <span style={{ color: colors.accent2 }}>
          {weightLossRate !== undefined && weightLossRate !== null
            ? `${weightLossRate} lbs / Week`
            : "--"}
        </span>
        <br />
        <span
          className="text-[20px] font-semibold font-inter"
          style={{ color: colors.textPrimary }}
        >
          With the Right Fuel Source
        </span>
      </h1>
      {/* Images */}
      <div className="flex flex-row justify-center items-center gap-4 mb-4">
        <img
          src={trophyImage}
          alt="Weekly Goal Illustration"
          className="rounded-lg"
          style={{ width: "auto", height: "auto" }}
          loading="eager"
        />
      </div>
      {/* Description */}
      <p
        className="text-[20px] font-normal font-inter mb-2"
        style={{ color: colors.textSecondary }}
      >
        This is your potential, what your body could lose if it’s in fat-burning
        mode. But that depends on getting your metabolism working with you, not
        against you.
        <br />
        <br />
        Low energy, stubborn cravings, and slow progress usually mean your body
        is still burning sugar instead of fat — and that keeps weight loss stuck.
      </p>
      {/* Static Callout */}
      <p
        className="text-[16px] font-normal font-inter mt-2 mb-6"
        style={{ color: colors.accent2 }}
      >
        With your numbers, results could show up even faster than expected, but
        only if your metabolism is dialed in and you’re burning fat, not sugar.
      </p>
    </div>
  );
};

export default Result5Card;
