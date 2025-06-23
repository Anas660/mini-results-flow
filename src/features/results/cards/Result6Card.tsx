import React from "react";
import { useFormContext } from "../../../context/form/useFormContext";
import calendarImage from "../../../assets/result6.png";
import ResultCardLayout from "../../../layout/Results/ResultCardLayout";

const Result6Card: React.FC = () => {
  const { formData } = useFormContext();
  const { seeResultsDays } = formData;

  return (
    <ResultCardLayout
      icon={<span className="text-[34px]">⏳</span>}
      headline={
        <>
          You Could See Results
          <br />
          in as Little as{" "}
          <span style={{ color: "var(--accent2)" }}>
            {seeResultsDays !== undefined && seeResultsDays !== null
              ? `${seeResultsDays} Days`
              : "--"}
          </span>
        </>
      }
      image={calendarImage}
      imageAlt="Weekly Goal Illustration"
      description={
        <>
          Visible change doesn’t take forever — when your metabolism shifts, your
          body can start dropping bloat, water weight, and fat surprisingly fast.
          <br />
          <br />
          It’s not about how long you try — it’s about whether your body’s
          actually set up to change. The wrong plan wastes months.
        </>
      }
      callout={
        <>
          You’re already aware — and that’s step one. Now imagine pairing that
          awareness with a plan that shows results in the mirror by day 10.
        </>
      }
    />
  );
};

export default Result6Card;