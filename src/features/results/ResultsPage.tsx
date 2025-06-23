import React, { useState, useContext, useEffect } from "react";
import Result1Card from "./cards/Result1Card";
import Result2Card from "./cards/Result2Card";
import Result3Card from "./cards/Result3Card";
import Result4Card from "./cards/Result4Card";
import Result5Card from "./cards/Result5Card";
import Result6Card from "./cards/Result6Card";
import ResultsLayout from "../../layout/Results/ResultsLayout";
import { ThemeContext } from "../../context/theme/ThemeContext";

import result1 from "../../assets/result1.png";
import result2 from "../../assets/result2.png";
import result3 from "../../assets/result3.png";
import result4 from "../../assets/result4.png";
import result5 from "../../assets/result5.png";
import result6 from "../../assets/result6.png";

// Preload result images when ResultsPage mounts
const resultImages = [
  result1,
  result2,
  result3,
  result4,
  result5,
  result6,
];

const steps = [
  Result1Card,
  Result2Card,
  Result3Card,
  Result4Card,
  Result5Card,
  Result6Card,
];

const ResultsPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const StepComponent = steps[step];
  const goNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const goBack = () => setStep((s) => Math.max(s - 1, 0));
  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    // Preload images
    resultImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{ background: colors.background }}
    >
      <ResultsLayout
        heading={`Step ${step + 1} of ${steps.length}`}
        onNext={goNext}
        onBack={goBack}
        showBack={step > 0}
        isLast={step === steps.length - 1}
        step={step + 1}
        totalSteps={steps.length}
      >
        <StepComponent />
      </ResultsLayout>
    </main>
  );
};

export default ResultsPage;