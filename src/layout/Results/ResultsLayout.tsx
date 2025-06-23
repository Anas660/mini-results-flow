import { ArrowRight, ArrowLeft } from "react-feather";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../context/theme/ThemeContext";
import Header from "../Header/Header";

const STEP_NAMES = [
  "", // step 1, no back button
  "Body Fat %",
  "BMI",
  "Caloric Intake",
  "Hydration",
  "Weight Rate",
];

const ResultsLayout: React.FC<{
  children: React.ReactNode;
  onNext: () => void;
  onBack?: () => void;
  showBack?: boolean;
  isLast?: boolean;
  heading: string;
  step: number; // current step, 1-based
  totalSteps: number;
}> = ({ children, onNext, onBack, showBack, isLast, step, totalSteps }) => {
  const navigate = useNavigate();
  const { colors } = useContext(ThemeContext);

  const BUTTON_COLOR = colors.accent;

  const handleNext = () => {
    if (isLast) {
      navigate("/sales");
    } else {
      onNext();
    }
  };

  // Determine the back button label based on the previous step
  const backButtonLabel =
    step > 1 && step - 1 < STEP_NAMES.length ? STEP_NAMES[step - 1] : "";

  return (
    <div
      className="relative w-full flex flex-col items-center"
      style={{ background: colors.background }}
    >
      <Header />
      {/* Header Row */}
      <div className="w-full max-w-xl px-4 flex items-center justify-between pt-2 pb-2 mb-4">
        {/* Heading on the left */}
        <h2 className="text-md font-semibold" style={{ color: BUTTON_COLOR }}>
          Your Results
        </h2>
        {/* Dots on the right */}
        <div className="flex gap-1">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <span
              key={idx}
              className="inline-block rounded-full"
              style={{
                width: 8,
                height: 8,
                backgroundColor: idx < step ? BUTTON_COLOR : "#D1D5DB",
                transition: "background 0.2s",
              }}
            />
          ))}
        </div>
      </div>
      <div
        className="w-full flex flex-col items-center pb-6"
        style={{ minHeight: "30vh" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xl"
            style={{ minHeight: "20vh" }} // adjust as needed for your content
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Buttons come right after content, not stuck to bottom */}
      <div className="w-full max-w-xl px-4 mt-4 mb-8">
        <div className={`flex w-full gap-4 ${showBack ? "" : "justify-end"}`}>
          {showBack && backButtonLabel && (
            <button
              type="button"
              className="font-bold py-2 rounded-lg shadow transition w-1/2 flex items-center justify-between cursor-pointer"
              style={{
                background: colors.cardBackground,
                borderColor: BUTTON_COLOR,
                color: BUTTON_COLOR,
                borderWidth: 2,
                borderStyle: "solid",
              }}
              onClick={onBack}
            >
              <span style={{ marginLeft: 8 }}>
                <ArrowLeft size={20} style={{ color: BUTTON_COLOR }} />
              </span>
              <span className="flex-1 text-center">{backButtonLabel}</span>
              <span style={{ width: 20 }} />
            </button>
          )}
          {/* Always show Next button */}
          <button
            type="button"
            className="text-white text-lg font-bold py-2 rounded-lg flex items-center justify-between gap-2 shadow transition hover:opacity-90 w-1/2 cursor-pointer"
            onClick={handleNext}
            style={{
              background: BUTTON_COLOR,
              borderWidth: 2,
              borderColor: BUTTON_COLOR,
              borderStyle: "solid",
            }}
          >
            <span style={{ width: 20, marginRight: 8 }} />
            <span className="flex-1 text-center">Next</span>
            <span style={{ marginRight: 8 }}>
              <ArrowRight size={20} style={{ color: "white" }} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsLayout;
