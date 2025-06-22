import React from "react";
import foodImage from "../../../assets/result3.png";
import { useFormContext } from "../../../context/useFormContext";

const Result3Card: React.FC = () => {
  const { formData } = useFormContext();
  const { calorieTarget } = formData;

  // Helper to determine callout
  let callout = "";
  if (calorieTarget !== undefined && calorieTarget !== null) {
    if (calorieTarget >= 1300 && calorieTarget <= 1500) {
      callout =
        "You’re already close — just upgrading your food quality could unlock smoother fat loss and better focus.";
    } else if (calorieTarget >= 1100 && calorieTarget < 1300) {
      callout =
        "At this range, your body is primed to burn fat — but only if you're eating nutrient-dense, low-carb foods that stabilize your system.";
    } else if (calorieTarget < 1100) {
      callout =
        "Extreme restriction can backfire — slowing your metabolism, increasing stress, and making results harder to sustain. Keto helps you eat smarter, not just less.";
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-8 w-full max-w-md mx-auto flex flex-col items-center mb-6">
      {/* Icon */}
      <div className="flex justify-center items-center mb-2">
        <span className="text-[34px]">🔥</span>
      </div>
      {/* Headline */}
      <h1 className="text-center text-[34px] leading-[1.2em] font-semibold font-inter text-[#183B49] mb-1">
        You Should Be Eating Around
        <br />
        <span className="text-[#F75950]">
          {calorieTarget !== undefined && calorieTarget !== null
            ? `${calorieTarget} Calories`
            : "--"}
        </span>
        <br />
        <span className="text-[20px] font-semibold font-inter text-[#183B49]">
          But Not All Calories Are Equal
        </span>
      </h1>
      {/* Images */}
      <div className="flex flex-row justify-center items-center gap-4 mb-4">
        <img
          src={foodImage}
          alt="Calories Illustration"
          className="rounded-lg"
          style={{ width: "auto", height: "auto" }}
          loading="lazy"
        />
      </div>
      {/* Description */}
      <p className="text-[20px] font-normal font-inter text-[#13556F] mb-2">
        Your body burns calories just to stay alive — that’s your BMR. Add in
        movement, and you burn even more. Eat less than you burn? You lose weight.
        Eat more? You store it. Simple math, but the{" "}
        <em>type</em> of calories still makes or breaks your results.
        <br />
        <br />
        Most people eat low-quality calories that spike cravings, crash energy, and
        cause fat to stick — even if they’re technically under their daily limit.
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

export default Result3Card;