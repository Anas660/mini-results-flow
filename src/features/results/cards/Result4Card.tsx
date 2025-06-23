import React from "react";
import waterImage from "../../../assets/result4.png";
import { useFormContext } from "../../../context/useFormContext";

const Result4Card: React.FC = () => {
  const { formData } = useFormContext();
  const { waterIntake } = formData;

  // Determine headline value and callout
  let waterHeadline = "--";
  let callout = "";

  if (
    (typeof waterIntake === "string" && (waterIntake === "coffee" || waterIntake === "tea"))
  ) {
    waterHeadline = "Only Coffee or Tea";
    callout =
      "Only Drinking Coffee or Tea? Caffeine doesn’t hydrate — in fact, it can dehydrate you. Adding just a few glasses of water each day could dramatically boost your energy and fat-burning.";
  } else if (typeof waterIntake === "number" || typeof waterIntake === "string") {
    const intakeNum = Number(waterIntake);
    if (intakeNum > 6) {
      waterHeadline = `${intakeNum} Cups`;
      callout =
        "Drinking over 6 glasses a day? Nice work — your hydration game is strong. Keep it up to support optimal fat loss, steady energy, and fewer cravings.";
    } else if (intakeNum >= 2 && intakeNum <= 6) {
      waterHeadline = `${intakeNum} Cups`;
      callout =
        "Drinking 2-6 glasses means you’re getting closer! Just a few more sips each day could make a real difference in your metabolism and how you feel overall.";
    } else if (intakeNum === 2) {
      waterHeadline = "About 2 Cups";
      callout =
        "Drinking about 2 glasses per day is a great start, but your body is likely still running dry. Upping your intake can improve digestion, curb cravings, and help you burn fat more efficiently.";
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-8 w-full max-w-xl flex flex-col items-center mb-6">
      {/* Icon */}
      <div className="flex justify-center items-center mb-2">
        <span className="text-[34px]">💧</span>
      </div>
      {/* Headline */}
      <h1 className="text-center text-[34px] leading-[1.2em] font-semibold font-inter text-[#183B49] mb-1">
        Your Body Needs{" "}
        <span className="text-[#F75950]">{waterHeadline}</span> of Water Daily
      </h1>
      {/* Subtitle */}
      <h2 className="text-center text-[20px] font-semibold font-inter text-[#183B49] mb-2">
        Here’s Why That Matters
      </h2>
      {/* Images */}
      <div className="flex flex-row justify-center items-center gap-4 mb-4">
        <img
          src={waterImage}
          alt="Water Intake Illustration"
          className="rounded-lg"
          style={{ width: "auto", height: "auto" }}
          loading="eager"
        />
      </div>
      {/* Description */}
      <p className="text-[20px] font-normal font-inter text-[#13556F] mb-2">
        Hydration is a fat-burning multiplier. Without enough water, your body holds onto toxins, slows digestion, and burns fat less efficiently.
        <br />
        <br />
        Even mild dehydration can feel like fatigue, hunger, or sugar cravings. You’re not lazy — you’re likely under-hydrated.
      </p>
      {/* Conditional Callout */}
      {callout && (
        <p className="text-[16px] font-normal font-inter text-[#F75950] mt-2 mb-6">
          {callout}
        </p>
      )}
    </div>
  );
};

export default Result4Card;