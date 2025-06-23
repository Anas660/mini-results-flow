import React, { useContext } from "react";
import labelImage from "../../../assets/pubmed-logo-b.svg";
import mayo from "../../../assets/mayo-clinic-b.webp";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const TrustedBySection: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <div className="w-full mt-10">
      <h2
        className="font-bold text-3xl sm:text-4xl mb-10 text-left"
        style={{ color: colors.textAccent }}
      >
        Trusted by health &amp; nutrition professionals
      </h2>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-2">
          <div className="flex justify-center items-center gap-2 mb-1 w-full">
            <img src={labelImage} alt="PubMed Central" className="h-10 w-auto" />
          </div>
          <p className="text-base" style={{ color: colors.textSecondary }}>
            There is evidence to suggest that a Ketogenic Diet can help with
            weight loss, visceral adiposity, and appetite control.
          </p>
          <a
            // href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2716748/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-sm mt-1"
            style={{ color: colors.accent2 }}
          >
            source
          </a>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="flex justify-center items-center gap-2 mb-1 w-full">
            <img src={mayo} alt="Mayo Clinic" className="h-14 w-auto" />
          </div>
          <p className="text-base" style={{ color: colors.textSecondary }}>
            Research shows that a keto diet can result in weight loss and
            improvements in cardiovascular risk factors.
          </p>
          <a
            // href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/ketogenic-diet/faq-20434863"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-sm mt-1"
            style={{ color: colors.accent2 }}
          >
            source
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;