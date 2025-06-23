import React, { useState, useContext } from "react";
import { ArrowRight } from "react-feather";
import { ThemeContext } from "../../../context/theme/ThemeContext";

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
  const { colors } = useContext(ThemeContext);

  return (
    <div className="w-full mt-10">
      <h2
        ref={planHeadingRef}
        className="text-center text-[22px] sm:text-2xl mb-2"
        style={{ color: colors.textSecondary }}
      >
        3 Month Custom Keto Plan
      </h2>
      <div
        className="flex items-center justify-between rounded-lg px-4 py-2 mb-4"
        style={{ background: colors.accent2 }}
      >
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
              ? ""
              : ""
          }`}
          style={{
            borderColor: selected === "split" ? colors.accent : colors.cardBorder,
            background: selected === "split" ? colors.background : colors.cardBackground,
            position: selected === "split" ? "relative" : undefined,
          }}
          onClick={() => setSelected("split")}
        >
          <div>
            <div
              className="font-bold text-base mb-1"
              style={{ color: colors.textSecondary }}
            >
              3 PAYMENTS OF $29
            </div>
            <div
              className="text-sm leading-tight"
              style={{ color: colors.textSecondary }}
            >
              Just $29 today. Split the rest
              <br />
              over 2 easy payments.
            </div>
          </div>
          <span className="ml-4 flex items-center justify-center">
            <span
              className="w-8 h-8 border-2 rounded-full flex items-center justify-center"
              style={{
                borderColor: selected === "split" ? colors.accent : colors.cardBorder,
                background: selected === "split" ? colors.accent : colors.cardBackground,
              }}
            >
              {selected === "split" && (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" fill={colors.accent} />
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
          className={`relative border-2 rounded-xl p-4 flex items-center justify-between cursor-pointer transition`}
          style={{
            borderColor: selected === "full" ? colors.accent : colors.cardBorder,
            background: selected === "full" ? colors.background : colors.cardBackground,
          }}
          onClick={() => setSelected("full")}
        >
          <div className="flex-1 relative">
            <span
              className="absolute"
              style={{
                top: "-16px",
                right: "-64px",
                background: selected === "full" ? colors.accent : colors.background,
                color: selected === "full"? colors.background : colors.textSecondary,
                fontWeight: 700,
                fontSize: "16px",
                border:
                  selected === "full"
                    ? `2px solid ${colors.accent}`
                    : `2px solid ${colors.background}`,
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
              <span
                className="text-white text-xs font-bold px-2 py-1 rounded"
                style={{ background: colors.accent2 }}
              >
                DISCOUNT
              </span>
            </div>
            <div
              className="font-medium text-base mb-6"
              style={{ color: colors.textSecondary }}
            >
              1 Payment of $67. Pay in full today
              <br />
              and save $20 instantly.
            </div>
          </div>
          <span className="ml-4 flex items-center justify-center">
            <span
              className="w-8 h-8 border-2 rounded-full flex items-center justify-center"
              style={{
                borderColor: selected === "full" ? colors.accent : colors.cardBorder,
                background: selected === "full" ? colors.accent : colors.cardBackground,
              }}
            >
              {selected === "full" && (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" fill={colors.accent} />
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
              background: selected === "full" ? colors.accent : "",
              color: selected === "full" ? colors.background : colors.textSecondary,
              letterSpacing: 1,
              borderTop:
                selected === "full"
                  ? `1px solid ${colors.accent}`
                  : `1px solid ${colors.background}`,
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
        <span
          className="text-xs font-medium"
          style={{ color: colors.textSecondary }}
        >
          ✅ Risk-Free: Backed by 60-Day Money-Back Guarantee
        </span>
      </div>
      <button
        className="font-bold py-3 px-8 rounded-lg flex items-center justify-center transition w-full relative pointer-events-auto shadow-lg"
        style={{
          background: colors.accent,
          color: colors.white,
          boxShadow: "0 2px 8px 0 rgba(54,188,159,0.10)",
          alignSelf: "center",
        }}
        onClick={() =>
          alert(
            `Thank you for continuing with the ${
              selected === "full" ? "1 Payment" : "3 Payments"
            } option!`
          )
        }
        aria-label="Scroll to plan section"
      >
        <span className="mx-auto">Continue</span>
        <span className="absolute right-6 text-lg">
          <ArrowRight size={20} style={{ color: colors.white }} />
        </span>
      </button>
      <div className="w-full text-center mt-2">
        <button
          className="underline text-base font-medium cursor-pointer"
          style={{ pointerEvents: "auto", color: colors.cardBorder }}
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
