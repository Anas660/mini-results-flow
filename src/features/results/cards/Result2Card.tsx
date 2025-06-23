import React from "react";
import image from "../../../assets/result2.png";
import { useFormContext } from "../../../context/form/useFormContext";
import ResultCardLayout from "../../../layout/Results/ResultCardLayout";
import { getBMICallout } from "../../../utils/resultCallouts";

const Result2Card: React.FC = () => {
  const { formData } = useFormContext();
  const callout = getBMICallout(formData.BMI);

  return (
    <ResultCardLayout
      icon={<span className="text-[34px]">📊</span>}
      headline={
        <>
          Your BMI Is{" "}
          <span style={{ color: "var(--accent2)" }}>
            {typeof formData.BMI === "number" && !isNaN(formData.BMI)
              ? formData.BMI
              : "--"}
          </span>
        </>
      }
      subtitle="— What That Means"
      image={image}
      imageAlt="BMI Illustration"
      description={
        <>
          BMI (Body Mass Index) is a quick way to estimate how your weight might
          affect your health based on your height and weight.
          <br />
          <br />
          When your BMI is too high, your body may store more fat than it uses.
          That can slow your metabolism, drain your energy, and make fat loss
          harder — even if you’re putting in effort.
        </>
      }
      callout={callout}
    />
  );
};

export default Result2Card;