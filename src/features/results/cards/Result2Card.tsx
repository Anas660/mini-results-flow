import React, { useContext } from "react";
import image from "../../../assets/result2.png";
import { useFormContext } from "../../../context/form/useFormContext";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const Result2Card: React.FC = () => {
  const { formData } = useFormContext();
  const { BMI } = formData;
  const { colors } = useContext(ThemeContext);

  // Helper to determine callout
  let callout = "";
  if (typeof BMI === "number" && !isNaN(BMI)) {
    if (BMI < 26) {
      callout =
        "You’re right on the edge — just a few small shifts could unlock better energy and faster fat-burning.";
    } else if (BMI >= 30 && BMI <= 34.9) {
      callout =
        "At this level, your body may be under more strain than you realize — from hormone balance to inflammation and recovery.";
    } else if (BMI >= 35) {
      callout =
        "This BMI range often comes with deeper challenges, like insulin resistance and chronic fatigue — but with the right plan, you can absolutely turn things around.";
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
        <span className="text-[34px]">📊</span>
      </div>
      {/* Headline */}
      <h1
        className="text-center text-[34px] leading-[1.2em] font-semibold font-inter mb-1"
        style={{ color: colors.textPrimary }}
      >
        Your BMI Is{" "}
        <span style={{ color: colors.accent2 }}>
          {typeof BMI === "number" && !isNaN(BMI) ? BMI : "--"}
        </span>
      </h1>
      {/* Subtitle */}
      <h2
        className="text-center text-[20px] font-semibold font-inter mb-2"
        style={{ color: colors.textPrimary }}
      >
        — What That Means
      </h2>
      {/* Images */}
      <div className="flex flex-row justify-center items-center gap-4 mb-4">
        <img
          src={image}
          alt="BMI Illustration"
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
        BMI (Body Mass Index) is a quick way to estimate how your weight might
        affect your health based on your height and weight.
        <br />
        <br />
        When your BMI is too high, your body may store more fat than it uses.
        That can slow your metabolism, drain your energy, and make fat loss
        harder — even if you’re putting in effort.
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

export default Result2Card;