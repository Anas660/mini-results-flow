import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme/ThemeContext"

type Props = {
  icon: React.ReactNode;
  headline: React.ReactNode;
  subtitle?: React.ReactNode;
  image: string;
  imageAlt: string;
  description: React.ReactNode;
  callout?: React.ReactNode;
};

const ResultCardLayout: React.FC<Props> = ({
  icon,
  headline,
  subtitle,
  image,
  imageAlt,
  description,
  callout,
}) => {
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
      <div className="flex justify-center items-center mb-2">{icon}</div>
      {/* Headline */}
      <h1
        className="text-center text-[34px] leading-[1.2em] font-semibold font-inter mb-1"
        style={{ color: colors.textPrimary }}
      >
        {headline}
      </h1>
      {/* Subtitle */}
      {subtitle && (
        <h2
          className="text-center text-[20px] font-semibold font-inter mb-2"
          style={{ color: colors.textPrimary }}
        >
          {subtitle}
        </h2>
      )}
      {/* Image */}
      <div className="flex flex-row justify-center items-center gap-4 mb-4">
        <img
          src={image}
          alt={imageAlt}
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
        {description}
      </p>
      {/* Callout */}
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

export default ResultCardLayout;