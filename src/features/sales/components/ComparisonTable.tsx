import React from "react";
import beforeImg from "../../../assets/fat.webp";
import afterImg from "../../../assets/slim.webp";
import arrows from "../../../assets/arrows.svg";

const ComparisonTable: React.FC = () => (
  <>
    <div className="flex justify-center items-center mb-2">
      <span className="text-2xl">🎯</span>
    </div>
    <h2 className="text-center text-2xl sm:text-3xl font-bold mb-2 text-[#12241F]">
      Your Personalized
      <br />
      KetoSlim Plan Is Ready
    </h2>
    <div
      className="relative flex flex-row justify-center items-end gap-2 mb-2 mt-4 w-full"
      style={{ minHeight: 180 }}
    >
      <img
        src={arrows}
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          zIndex: 0,
          width: 140,
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
    <div className="flex w-full justify-between items-center mt-2 mb-4 shadow-md rounded-lg bg-white py-4">
      <div className="w-1/2 text-center font-bold text-[#12241F]">Now</div>
      <div className="w-1/2 text-center font-bold text-[#12241F]">6 Months</div>
    </div>
    <div className="w-full grid grid-cols-2 gap-x-8 gap-y-4 bg-white rounded-xl p-4 sm:p-6">
      {/* Now Column */}
      <div className="flex flex-col gap-5 pr-2">
        <div>
          <div className="text-xs text-gray-500 mb-1">Body Fat</div>
          <div className="text-[#F75950] font-bold text-base">20–25%</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Energy Levels</div>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 bg-[#F75950] rounded" style={{ width: "30%" }} />
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Physical Health</div>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 bg-[#F75950] rounded" style={{ width: "35%" }} />
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Metabolism Speed</div>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 bg-[#F75950] rounded" style={{ width: "25%" }} />
          </div>
        </div>
      </div>
      {/* 6 Months Column */}
      <div className="flex flex-col gap-5 pl-2">
        <div>
          <div className="text-xs text-gray-500 mb-1">Body Fat</div>
          <div className="text-[#36BC9F] font-bold text-base">10–12%</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Energy Levels</div>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 bg-[#36BC9F] rounded" style={{ width: "85%" }} />
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Physical Health</div>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 bg-[#36BC9F] rounded" style={{ width: "90%" }} />
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Metabolism Speed</div>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 bg-[#36BC9F] rounded" style={{ width: "80%" }} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ComparisonTable;