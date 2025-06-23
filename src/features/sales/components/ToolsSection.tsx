import React, { useContext } from "react";
import food from "../../../assets/keto-food.webp";
import cart from "../../../assets/cart.webp";
import pot from "../../../assets/heart-pot.webp";
import education from "../../../assets/education-icon.webp";
import iphone from "../../../assets/iphone-mockup-r.webp";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const ToolsSection: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <h1
        className="font-bold text-lg sm:text-xl"
        style={{ color: colors.textAccent }}
      >
        Get all the right tools &amp; knowledge.
      </h1>
      <div className="mt-6 flex flex-row items-center justify-between w-full">
        <div className="flex flex-col gap-4 flex-1 max-w-xs">
          <div className="flex items-center gap-3">
            <img src={food} alt="" className="w-8 h-8" />
            <span
              className="font-medium text-sm"
              style={{ color: colors.accent2 }}
            >
              Daily Custom Meal Plan
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img src={cart} alt="" className="w-8 h-8" />
            <span
              className="font-medium text-sm"
              style={{ color: colors.accent2 }}
            >
              Done-For-You Grocery Lists
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img src={pot} alt="" className="w-8 h-8" />
            <span
              className="font-medium text-sm"
              style={{ color: colors.accent2 }}
            >
              Overwhelm-Free Delicious Recipes
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img src={education} alt="" className="w-8 h-8" />
            <span
              className="font-medium text-sm"
              style={{ color: colors.accent2 }}
            >
              Weekly Tips &amp; Guidance
            </span>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <img
            src={iphone}
            alt="App preview"
            className="h-[320px] w-auto max-h-[300px] drop-shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default ToolsSection;