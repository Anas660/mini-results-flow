import React from "react";
import waterImage from "../../../assets/result4.png";
import { useFormContext } from "../../../context/form/useFormContext";
import ResultCardLayout from "../../../layout/Results/ResultCardLayout";
import { getWaterCallout } from "../../../utils/resultCallouts";

const Result4Card: React.FC = () => {
  const { formData } = useFormContext();
  const { headline: waterHeadline, callout } = getWaterCallout(formData.waterIntake);

  return (
    <ResultCardLayout
      icon={<span className="text-[34px]">💧</span>}
      headline={
        <>
          Your Body Needs{" "}
          <span style={{ color: "var(--accent2)" }}>{waterHeadline}</span> of Water Daily
        </>
      }
      subtitle="Here’s Why That Matters"
      image={waterImage}
      imageAlt="Water Intake Illustration"
      description={
        <>
          Hydration is a fat-burning multiplier. Without enough water, your body holds onto toxins, slows digestion, and burns fat less efficiently.
          <br />
          <br />
          Even mild dehydration can feel like fatigue, hunger, or sugar cravings. You’re not lazy — you’re likely under-hydrated.
        </>
      }
      callout={callout}
    />
  );
};

export default Result4Card;