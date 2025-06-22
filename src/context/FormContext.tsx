import { createContext } from "react";

export type FormData = {
  gender: "male" | "female" | "";
  bodyFatPercent: number | "";
  BMI: number | "";
  calorieTarget: number | "";
  waterIntake: number | "";
  weightLossRate: number | "";
  seeResultsDays: number | "";
};

export type FormContextType = {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
};

export const defaultFormData: FormData = {
  gender: "",
  bodyFatPercent: "",
  BMI: "",
  calorieTarget: "",
  waterIntake: "",
  weightLossRate: "",
  seeResultsDays: "",
};

export const FormContext = createContext<FormContextType | undefined>(undefined);