import React from "react";
import { useFormContext } from "../../../context/form/useFormContext";
import image from "../../../assets/result1.png";
import ResultCardLayout from "../../../layout/Results/ResultCardLayout";
import { getBodyFatCallout } from "../../../utils/resultCallouts";

const Result1Card: React.FC = () => {
  const { formData } = useFormContext();
  const callout = getBodyFatCallout(formData);

  return (
    <ResultCardLayout
      icon={<span className="text-[34px]">⚖️</span>}
      headline={
        <>
          Your Body Fat
          <br />
          <span>
            Percentage Is{" "}
            <span style={{ color: "var(--accent2)" }}>
              {formData.bodyFatPercent !== undefined && formData.bodyFatPercent !== null
                ? `${formData.bodyFatPercent}%`
                : "--"}
            </span>
          </span>
        </>
      }
      subtitle="Here’s Why That Matters"
      image={image}
      imageAlt="Muscle Mass"
      description={
        <>
          Your body fat percentage gives a clearer picture than BMI alone. It tells
          us how much of your body is lean mass (muscle, organs, bone) vs stored
          fat.
          <br />
          <br />
          Too much stored fat doesn’t just affect how you look — it impacts your
          energy, hormone balance, and ability to burn fat efficiently.
        </>
      }
      callout={callout}
    />
  );
};

export default Result1Card;