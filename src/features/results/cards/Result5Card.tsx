
import React from "react";
import trophyImage from "../../../assets/result5.png";
import { useFormContext } from "../../../context/useFormContext";

const Result5Card: React.FC = () => {
  const { formData } = useFormContext();
  const { weightLossRate } = formData;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-8 w-full max-w-md mx-auto flex flex-col items-center mb-6">
      {/* Icon */}
      <div className="flex justify-center items-center mb-2">
        <span className="text-[34px]">📉</span>
      </div>
      {/* Headline */}
      <h1 className="text-center text-[34px] leading-[1.2em] font-semibold font-inter text-[#183B49] mb-1">
        You Could Be Losing
        <br />
        <span className="text-[#F75950]">
          {weightLossRate !== undefined && weightLossRate !== null
            ? `${weightLossRate} lbs / Week`
            : "--"}
        </span>
        <br />
        <span className="text-[20px] font-semibold font-inter text-[#183B49]">
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
          loading="lazy"
        />
      </div>
      {/* Description */}
      <p className="text-[20px] font-normal font-inter text-[#13556F] mb-2">
        This is your potential, what your body could lose if it’s in fat-burning
        mode. But that depends on getting your metabolism working with you, not
        against you.
        <br />
        <br />
        Low energy, stubborn cravings, and slow progress usually mean your body
        is still burning sugar instead of fat — and that keeps weight loss stuck.
      </p>
      {/* Static Callout */}
      <p className="text-[16px] font-normal font-inter text-[#F75950] mt-2 mb-6">
        With your numbers, results could show up even faster than expected, but
        only if your metabolism is dialed in and you’re burning fat, not sugar.
      </p>
    </div>
  );
};

export default Result5Card;
