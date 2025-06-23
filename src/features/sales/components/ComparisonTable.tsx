import React, { useContext } from "react";
import beforeImg from "../../../assets/fat.webp";
import afterImg from "../../../assets/slim.webp";
import arrows from "../../../assets/arrows.svg";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const ComparisonTable: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <div className="flex justify-center items-center mb-2">
        <span className="text-2xl">🎯</span>
      </div>
      <h2
        className="text-center text-2xl sm:text-3xl font-bold mb-2"
        style={{ color: colors.textAccent }}
      >
        Your Personalized
        <br />
        KetoSlim Plan Is Ready
      </h2>
      <div
        className="relative flex flex-row justify-center items-end gap-18 mb-2 mt-4 w-full"
        style={{ minHeight: 180 }}
      >
        <img
          src={arrows}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{
            zIndex: 0,
            width: 200,
            height: 200,
            objectFit: "contain",
            filter:
              "blur(4px) brightness(0) saturate(100%) invert(23%) sepia(99%) saturate(7497%) hue-rotate(353deg) brightness(101%) contrast(101%)",
            opacity: 0.7,
          }}
          loading="eager"
        />
        <img
          src={beforeImg}
          alt="Before"
          className="rounded-lg relative z-10"
          width={170}
          height={180}
          loading="lazy"
        />
        <img
          src={afterImg}
          alt="After"
          className="rounded-lg relative z-10"
          width={170}
          height={180}
          loading="lazy"
        />
      </div>
      <div
        className="flex w-full justify-between items-center mt-2 mb-4 shadow-md rounded-lg py-4"
        style={{ background: colors.cardBackground }}
      >
        <div
          className="w-1/2 text-center font-bold"
          style={{ color: colors.textAccent }}
        >
          Now
        </div>
        <div
          className="w-1/2 text-center font-bold"
          style={{ color: colors.textAccent }}
        >
          6 Months
        </div>
      </div>
      <div
        className="w-full grid grid-cols-2 gap-x-8 gap-y-4 rounded-xl p-4 sm:p-6"
        style={{ background: colors.cardBackground }}
      >
        {/* Now Column */}
        <div className="flex flex-col gap-5 pr-2">
          <div>
            <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>
              Body Fat
            </div>
            <div className="font-bold text-base" style={{ color: colors.accent2 }}>
              20–25%
            </div>
          </div>
          <div>
            <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>
              Energy Levels
            </div>
            <div
              className="w-full h-2 rounded"
              style={{ background: colors.cardBorder }}
            >
              <div
                className="h-2 rounded"
                style={{ width: "30%", background: colors.accent2 }}
              />
            </div>
          </div>
          <div>
            <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>
              Physical Health
            </div>
            <div
              className="w-full h-2 rounded"
              style={{ background: colors.cardBorder }}
            >
              <div
                className="h-2 rounded"
                style={{ width: "35%", background: colors.accent2 }}
              />
            </div>
          </div>
          <div>
            <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>
              Metabolism Speed
            </div>
            <div
              className="w-full h-2 rounded"
              style={{ background: colors.cardBorder }}
            >
              <div
                className="h-2 rounded"
                style={{ width: "25%", background: colors.accent2 }}
              />
            </div>
          </div>
        </div>
        {/* 6 Months Column */}
        <div className="flex flex-col gap-5 pl-2">
          <div>
            <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>
              Body Fat
            </div>
            <div className="font-bold text-base" style={{ color: colors.accent }}>
              10–12%
            </div>
          </div>
          <div>
            <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>
              Energy Levels
            </div>
            <div
              className="w-full h-2 rounded"
              style={{ background: colors.cardBorder }}
            >
              <div
                className="h-2 rounded"
                style={{ width: "85%", background: colors.accent }}
              />
            </div>
          </div>
          <div>
            <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>
              Physical Health
            </div>
            <div
              className="w-full h-2 rounded"
              style={{ background: colors.cardBorder }}
            >
              <div
                className="h-2 rounded"
                style={{ width: "90%", background: colors.accent }}
              />
            </div>
          </div>
          <div>
            <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>
              Metabolism Speed
            </div>
            <div
              className="w-full h-2 rounded"
              style={{ background: colors.cardBorder }}
            >
              <div
                className="h-2 rounded"
                style={{ width: "80%", background: colors.accent }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonTable;