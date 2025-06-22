import React from "react";

const BenefitsList: React.FC = () => (
  <div className="w-full mt-6">
    <div className="flex flex-col items-center mb-6">
      <div className="w-full flex flex-col">
        <div className="text-[#12241F] font-semibold text-base mb-2">
          Your program will also work on:
        </div>
        <ul className="flex flex-col gap-2 items-center w-full max-w-xs">
          <li className="flex items-center gap-2 w-full">
            <span className="text-[#F75950] text-xl bg-white rounded-full border border-[#F75950] w-7 h-7 flex items-center justify-center">
              ✔
            </span>
            <span className="text-[#12241F] font-medium text-base">
              Improving Digestion
            </span>
          </li>
          <li className="flex items-center gap-2 w-full">
            <span className="text-[#F75950] text-xl bg-white rounded-full border border-[#F75950] w-7 h-7 flex items-center justify-center">
              ✔
            </span>
            <span className="text-[#12241F] font-medium text-base">
              Toning Muscles
            </span>
          </li>
          <li className="flex items-center gap-2 w-full">
            <span className="text-[#F75950] text-xl bg-white rounded-full border border-[#F75950] w-7 h-7 flex items-center justify-center">
              ✔
            </span>
            <span className="text-[#12241F] font-medium text-base">
              Mental Wellness Reset
            </span>
          </li>
          <li className="flex items-center gap-2 w-full">
            <span className="text-[#F75950] text-xl bg-white rounded-full border border-[#F75950] w-7 h-7 flex items-center justify-center">
              ✔
            </span>
            <span className="text-[#12241F] font-medium text-base">
              Physical Endurance Boost
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default BenefitsList;