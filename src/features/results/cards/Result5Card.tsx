import React, { useContext } from "react";
import trophyImage from "../../../assets/result5.png";
import { useFormContext } from "../../../context/form/useFormContext";
import ResultCardLayout from "../../../layout/Results/ResultCardLayout";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const Result5Card: React.FC = () => {
  const { formData } = useFormContext();
  const { weightLossRate } = formData;
  const { colors } = useContext(ThemeContext);

  return (
    <ResultCardLayout
      icon={<span className="text-[34px]">📉</span>}
      headline={
        <>
          You Could Be Losing
          <br />
          <span style={{ color: colors.accent2 }}>
            {weightLossRate !== undefined && weightLossRate !== null
              ? `${weightLossRate} lbs / Week`
              : "--"}
          </span>
          <br />
          <span
            className="text-[20px] font-semibold font-inter"
            style={{ color: "inherit" }}
          >
            With the Right Fuel Source
          </span>
        </>
      }
      image={trophyImage}
      imageAlt="Weekly Goal Illustration"
      description={
        <>
          This is your potential, what your body could lose if it’s in fat-burning
          mode. But that depends on getting your metabolism working with you, not
          against you.
          <br />
          <br />
          Low energy, stubborn cravings, and slow progress usually mean your body
          is still burning sugar instead of fat — and that keeps weight loss stuck.
        </>
      }
      callout={
        <>
          With your numbers, results could show up even faster than expected, but
          only if your metabolism is dialed in and you’re burning fat, not sugar.
        </>
      }
    />
  );
};

export default Result5Card;
