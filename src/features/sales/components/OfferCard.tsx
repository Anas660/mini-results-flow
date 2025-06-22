import React, { useState } from "react";
import { ArrowRight } from "react-feather";

type OfferCardProps = {
  planHeadingRef: React.RefObject<HTMLHeadingElement | null>;
  countdown: number;
  formatCountdown: (secs: number) => string;
  navigate: (path: string) => void;
};

const OfferCard: React.FC<OfferCardProps> = ({
  planHeadingRef,
  countdown,
  formatCountdown,
  navigate,
}) => {
  const [selected, setSelected] = useState<"full" | "split">("full");

  return (
    <div className="w-full mt-10">
      <h2
        ref={planHeadingRef}
        className="text-center text-[22px] sm:text-2xl text-[#13556F] mb-2"
      >
        3 Month Custom Keto Plan
      </h2>
      <div className="flex items-center justify-between bg-[#F75950] rounded-lg px-4 py-2 mb-4">
        <span className="text-white font-medium text-base">
          Discount expires in:
        </span>
        <span className="text-white font-bold text-lg flex items-center gap-1">
          {formatCountdown(countdown)}
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="9" stroke="#fff" strokeWidth="2" />
            <path
              d="M10 5v5l3 3"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {/* Split Payment Offer */}
        <div
          className={`border-2 rounded-xl p-4 flex items-center justify-between cursor-pointer transition ${
            selected === "split"
              ? "border-[#36BC9F] bg-[#E6FAF6] relative"
              : "border-gray-200"
          }`}
          onClick={() => setSelected("split")}
        >
          <div>
            <div className="font-bold text-[#13556F] text-base mb-1">
              3 PAYMENTS OF $29
            </div>
            <div className="text-[#13556F] text-sm leading-tight">
              Just $29 today. Split the rest
              <br />
              over 2 easy payments.
            </div>
          </div>
          <span className="ml-4 flex items-center justify-center">
            <span
              className={`w-8 h-8 border-2 rounded-full flex items-center justify-center ${
                selected === "split"
                  ? "border-[#36BC9F] bg-[#36BC9F]"
                  : "border-gray-300 bg-white"
              }`}
            >
              {selected === "split" && (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" fill="#36BC9F" />
                  <path
                    d="M9 15.5l4 4 6-8"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </span>
        </div>
        {/* Full Payment Offer */}
        <div
          className={`relative border-2 rounded-xl p-4 flex items-center justify-between cursor-pointer transition ${
            selected === "full"
              ? "border-[#36BC9F] bg-[#E6FAF6]"
              : "border-gray-200 bg-white"
          }`}
          onClick={() => setSelected("full")}
        >
          <div className="flex-1 relative">
            <span
              className="absolute"
              style={{
                top: "-16px",
                right: "-64px",
                background: selected === "full" ? "#36BC9F" : "#E6FAF6",
                color: "#000",
                fontWeight: 700,
                fontSize: "16px",
                border: selected==="full" ? "2px solid #36BC9F": "2px solid #E6FAF6",
                borderTopRightRadius: "10px",
                borderBottomLeftRadius: "10px",
                padding: "4px 16px",
                zIndex: 10,
                boxShadow: "0 2px 8px 0 rgba(54,188,159,0.10)",
                letterSpacing: 1,
              }}
            >
              23% OFF
            </span>
            <div className="flex items-center gap-2 mb-1 mt-2">
              <span className="bg-[#F75950] text-white text-xs font-bold px-2 py-1 rounded">
                DISCOUNT
              </span>
            </div>
            <div className="text-[#13556F] font-medium text-base mb-6">
              1 Payment of $67. Pay in full today
              <br />
              and save $20 instantly.
            </div>
          </div>
          <span className="ml-4 flex items-center justify-center">
            <span
              className={`w-8 h-8 border-2 rounded-full flex items-center justify-center ${
                selected === "full"
                  ? "border-[#36BC9F] bg-[#36BC9F]"
                  : "border-gray-300 bg-white"
              }`}
            >
              {selected === "full" && (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" fill="#36BC9F" />
                  <path
                    d="M9 15.5l4 4 6-8"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </span>
          <span
            className="absolute left-0 right-0 bottom-0 text-black text-xs font-bold px-4 py-1 rounded-b-xl shadow flex justify-center items-center"
            style={{
              background: selected === "full" ? "#36BC9F" : "",
              letterSpacing: 1,
              borderTop:
                selected === "full" ? "1px solid #36BC9F" : "1px solid #E6FAF6",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              width: "100%",
              marginTop: "10px",
            }}
          >
            MOST POPULAR
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-8 mb-4 text-center">
        <span className="text-[#13556F] text-xs font-medium">
          ✅ Risk-Free: Backed by 60-Day Money-Back Guarantee
        </span>
      </div>
      <button
        className="w-full bg-[#36BC9F] hover:bg-[#2ea88c] text-white font-bold text-lg py-3 rounded-xl flex items-center justify-center transition mb-2"
        onClick={() =>
          alert(
            `Thank you for continuing with the ${
              selected === "full" ? "1 Payment" : "3 Payments"
            } option!`
          )
        }
      >
        Continue
        <ArrowRight size={24} className="ml-2" />
      </button>
      <div className="w-full text-center mt-2">
        <button
          className="text-gray-400 underline text-base font-medium cursor-pointer hover:text-gray-500"
          style={{ pointerEvents: "auto" }}
          type="button"
          onClick={() => navigate("/")}
        >
          No Thanks, I don’t want my plan.
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
