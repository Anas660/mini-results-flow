import React, { useContext } from "react";
import { useFormContext } from "../../../context/form/useFormContext";
import calendarImage from "../../../assets/result6.png";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const Result6Card: React.FC = () => {
  const { formData } = useFormContext();
  const { seeResultsDays } = formData;
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
        <span className="text-[34px]">⏳</span>
      </div>
      {/* Headline */}
      <h1
        className="text-center text-[34px] leading-[1.2em] font-semibold font-inter mb-1"
        style={{ color: colors.textPrimary }}
      >
        You Could See Results
        <br />
        in as Little as{" "}
        <span style={{ color: colors.accent2 }}>
          {seeResultsDays !== undefined && seeResultsDays !== null
            ? `${seeResultsDays} Days`
            : "--"}
        </span>
      </h1>
      {/* Images */}
      <div className="flex flex-row justify-center items-center gap-4 mb-4">
        <img
          src={calendarImage}
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
        Visible change doesn’t take forever — when your metabolism shifts, your
        body can start dropping bloat, water weight, and fat surprisingly fast.
        <br />
        <br />
        It’s not about how long you try — it’s about whether your body’s
        actually set up to change. The wrong plan wastes months.
      </p>
      {/* Static Callout */}
      <p
        className="text-[16px] font-normal font-inter mt-2 mb-6"
        style={{ color: colors.accent2 }}
      >
        You’re already aware — and that’s step one. Now imagine pairing that
        awareness with a plan that shows results in the mirror by day 10.
      </p>
    </div>
  );
};

export default Result6Card;