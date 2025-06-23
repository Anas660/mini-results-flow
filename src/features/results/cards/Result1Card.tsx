import React, { useContext } from "react";
import image from "../../../assets/result1.png";
import { useFormContext } from "../../../context/form/useFormContext";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const Result1Card: React.FC = () => {
  const { formData } = useFormContext();
  const { gender, bodyFatPercent } = formData;
  const { colors } = useContext(ThemeContext);

  // Helper to determine callout
  let callout = "";
  if (gender === "male") {
    if (bodyFatPercent < 24) {
      callout =
        "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
    } else if (bodyFatPercent >= 25 && bodyFatPercent <= 31) {
      callout =
        "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
    } else if (bodyFatPercent >= 32) {
      callout =
        "At this level, your body may be stuck in a constant state of inflammation and energy imbalance — making fat loss harder, appetite less predictable, and progress feel like a constant uphill battle.";
    }
  } else if (gender === "female") {
    if (bodyFatPercent < 31) {
      callout =
        "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
    } else if (bodyFatPercent >= 32 && bodyFatPercent <= 39) {
      callout =
        "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
    } else if (bodyFatPercent >= 40) {
      callout =
        "At this level, your body may be stuck in a constant state of inflammation and energy imbalance — making fat loss harder, appetite less predictable, and progress feel like a constant uphill battle.";
    }
  }

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
        <span className="text-[34px]">⚖️</span>
      </div>
      {/* Headline */}
      <h1
        className="text-center text-[34px] leading-[1.2em] font-semibold font-inter mb-1"
        style={{ color: colors.textPrimary }}
      >
        Your Body Fat
        <br />
        <span>
          Percentage Is{" "}
          <span style={{ color: colors.accent2 }}>
            {bodyFatPercent !== undefined && bodyFatPercent !== null
              ? `${bodyFatPercent}%`
              : "--"}
          </span>
        </span>
      </h1>
      {/* Subtitle */}
      <h2
        className="text-center text-[20px] font-semibold font-inter mb-2"
        style={{ color: colors.textPrimary }}
      >
        Here’s Why That Matters
      </h2>
      {/* Images */}
      <div className="flex flex-row justify-center items-center gap-4 mb-4">
        <img
          src={image}
          alt="Muscle Mass"
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
        Your body fat percentage gives a clearer picture than BMI alone. It tells
        us how much of your body is lean mass (muscle, organs, bone) vs stored
        fat.
        <br />
        <br />
        Too much stored fat doesn’t just affect how you look — it impacts your
        energy, hormone balance, and ability to burn fat efficiently.
      </p>
      {/* Conditional Callout */}
      {callout && (
        <p
          className="text-[16px] font-normal font-inter mt-2 mb-6"
          style={{ color: colors.accent2 }}
        >
          {callout}
        </p>
      )}
    </div>
  );
};

export default Result1Card;