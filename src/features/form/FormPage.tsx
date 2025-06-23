import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/form/useFormContext";
import TextInput from "../../components/TextInput";
import SliderInput from "../../components/SliderInput";
import RadioGroup from "../../components/RadioGroup";
import DropdownInput from "../../components/DropdownInput";
import { ThemeContext } from "../../context/theme/ThemeContext";
import {
  validateForm,
  getValidationMessage,
} from "../../utils/formValidationUtils";
import SubmitButton from "../../components/SubmitButton";
import Header from "../../layout/Header/Header";

const waterOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "4", value: 4 },
  { label: "6", value: 6 },
];

const FormPage: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { formData, setFormData } = useFormContext();
  const navigate = useNavigate();
  const [touched, setTouched] = useState(false);

  // Utility for numeric fields
  const numericFields: Array<keyof typeof formData> = [
    "bodyFatPercent",
    "BMI",
    "calorieTarget",
    "waterIntake",
    "weightLossRate",
    "seeResultsDays",
  ];

  // Validation logic moved to utility
  const isValid = validateForm(formData);
  // Helper for required asterisk
  const Required = () => (
    <span
      aria-label="required"
      style={{ color: colors.accent2 }}
      className="ml-1"
    >
      *
    </span>
  );

  // Separate handler for all changes
  // Helper to handle numeric field changes
  const handleNumericChange = (name: string, value: string | number) => {
    setFormData({ [name]: value === "" ? 0 : Number(value) });
  };

  // Helper to handle non-numeric field changes
  const handleTextChange = (name: string, value: string) => {
    setFormData({ [name]: value });
  };

  // Main change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (numericFields.includes(name as keyof typeof formData)) {
      handleNumericChange(name, value);
    } else {
      handleTextChange(name, value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (isValid) {
      navigate("/results");
    }
  };

  return (
    <main
      style={{ background: colors.background }}
      className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 py-6"
      aria-label="Form page for entering health details"
    >
      <Header />
      <h1
        className="mb-8 text-[34px] leading-[1.2em] font-semibold text-center font-inter"
        style={{ letterSpacing: "-0.5px", color: colors.textAccent }}
      >
        Enter Your <span style={{ color: colors.accent2 }}>Details</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          background: colors.cardBackground,
          borderColor: colors.cardBorder,
          color: colors.textPrimary,
        }}
        className="shadow-xl rounded-2xl p-4 sm:p-8 w-full max-w-xl space-y-6 border"
        aria-label="Results Input Form"
        noValidate
      >
        <RadioGroup
          label={
            <>
              Gender
              <Required />
            </>
          }
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          required
        />
        <SliderInput
          label={
            <>
              Body Fat %<Required />
            </>
          }
          name="bodyFatPercent"
          id="bodyFatPercent"
          value={
            typeof formData.bodyFatPercent === "number"
              ? formData.bodyFatPercent
              : 0
          }
          onChange={handleChange}
          min={0}
          max={100}
          required
          trackColor={colors.accent}
          aria-label="Body Fat Percentage"
          placeholder="0-100"
        />
        <div className="text-xs" style={{ color: colors.textSecondary }}>
          Enter your estimated body fat percentage (0-100).
        </div>
        <SliderInput
          label={
            <>
              BMI
              <Required />
            </>
          }
          name="BMI"
          id="BMI"
          value={typeof formData.BMI === "number" ? formData.BMI : 0}
          onChange={handleChange}
          min={0}
          max={40}
          required
          trackColor={colors.accent}
          aria-label="Body Mass Index"
          placeholder="0-40"
        />
        <div className="text-xs" style={{ color: colors.textSecondary }}>
          Enter your Body Mass Index (0-40).
        </div>
        <TextInput
          label={
            <>
              Daily Calorie Target
              <Required />
            </>
          }
          name="calorieTarget"
          value={formData.calorieTarget === 0 ? "" : formData.calorieTarget}
          onChange={handleChange}
          type="number"
          min={0}
          required
          placeholder="e.g. 2000"
        />
        <DropdownInput
          label={
            <>
              Cups of Water Per Day
              <Required />
            </>
          }
          name="waterIntake"
          value={formData.waterIntake === 0 ? "" : formData.waterIntake}
          onChange={handleChange}
          options={waterOptions}
          required
          placeholder="Select cups"
          className="h-[43px]"
        />
        <TextInput
          label={
            <>
              Weekly Weight Loss Goal (lbs)
              <Required />
            </>
          }
          name="weightLossRate"
          value={formData.weightLossRate == 0 ? "" : formData.weightLossRate}
          onChange={handleChange}
          type="number"
          min={0}
          step={0.1}
          required
          placeholder="e.g. 1.5"
        />
        <TextInput
          label={
            <>
              Days to See Results
              <Required />
            </>
          }
          name="seeResultsDays"
          value={formData.seeResultsDays == 0 ? "" : formData.seeResultsDays}
          onChange={handleChange}
          type="number"
          min={1}
          required
          placeholder="e.g. 30"
        />

        <SubmitButton
          isValid={isValid}
          colors={colors}
          label="See My Results"
        />
        {/* Validation feedback */}
        {!isValid && touched && (
          <div
            className="text-xs mt-2 text-center font-inter"
            style={{ color: colors.accent2 }}
            role="alert"
            aria-live="polite"
          >
            {getValidationMessage(formData)}
          </div>
        )}
        {/* Inline helper for why button is disabled */}
        {!isValid && !touched && (
          <div
            className="text-xs mt-2 text-center font-inter"
            style={{ color: colors.textSecondary }}
            aria-live="polite"
          >
            Please fill out all required fields to enable the button.
          </div>
        )}
      </form>
    </main>
  );
};

export default FormPage;
