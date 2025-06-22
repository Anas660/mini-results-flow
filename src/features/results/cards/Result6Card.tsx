import React from "react";
import { useFormContext } from "../../../context/useFormContext";
import calendarImage from "../../../assets/result6.png";

const Result6Card: React.FC = () => {
  const { formData } = useFormContext();
  const { seeResultsDays } = formData;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-8 w-full max-w-md mx-auto flex flex-col items-center mb-6">
      {/* Icon */}
      <div className="flex justify-center items-center mb-2">
        <span className="text-[34px]">⏳</span>
      </div>
      {/* Headline */}
      <h1 className="text-center text-[34px] leading-[1.2em] font-semibold font-inter text-[#183B49] mb-1">
        You Could See Results
        <br />
        in as Little as{" "}
        <span className="text-[#F75950]">
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
          loading="lazy"
        />
      </div>
      {/* Description */}
      <p className="text-[20px] font-normal font-inter text-[#13556F] mb-2">
        Visible change doesn’t take forever — when your metabolism shifts, your
        body can start dropping bloat, water weight, and fat surprisingly fast.
        <br />
        <br />
        It’s not about how long you try — it’s about whether your body’s
        actually set up to change. The wrong plan wastes months.
      </p>
      {/* Static Callout */}
      <p className="text-[16px] font-normal font-inter text-[#F75950] mt-2 mb-6">
        You’re already aware — and that’s step one. Now imagine pairing that
        awareness with a plan that shows results in the mirror by day 10.
      </p>
    </div>
  );
};

export default Result6Card;