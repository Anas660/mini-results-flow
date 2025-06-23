import React from "react";
import foodImage from "../../../assets/result3.png";
import { useFormContext } from "../../../context/form/useFormContext";
import ResultCardLayout from "../../../layout/Results/ResultCardLayout";
import { getCalorieCallout } from "../../../utils/resultCallouts";

const Result3Card: React.FC = () => {
  const { formData } = useFormContext();
  const callout = getCalorieCallout(formData.calorieTarget);

  return (
    <ResultCardLayout
      icon={<span className="text-[34px]">🔥</span>}
      headline={
        <>
          You Should Be Eating Around
          <br />
          <span style={{ color: "var(--accent2)" }}>
            {formData.calorieTarget !== undefined && formData.calorieTarget !== null
              ? `${formData.calorieTarget} Calories`
              : "--"}
          </span>
          <br />
          <span className="text-[20px] font-semibold font-inter" style={{ color: "inherit" }}>
            But Not All Calories Are Equal
          </span>
        </>
      }
      image={foodImage}
      imageAlt="Calories Illustration"
      description={
        <>
          Your body burns calories just to stay alive — that’s your BMR. Add in
          movement, and you burn even more. Eat less than you burn? You lose weight.
          Eat more? You store it. Simple math, but the <em>type</em> of calories still makes or breaks your results.
          <br />
          <br />
          Most people eat low-quality calories that spike cravings, crash energy, and
          cause fat to stick — even if they’re technically under their daily limit.
        </>
      }
      callout={callout}
    />
  );
};

export default Result3Card;