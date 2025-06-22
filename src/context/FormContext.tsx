import { createContext } from "react";

export type FormData = {
  gender: "male" | "female" | "";
  bodyFatPercent: number;
  BMI: number;
  calorieTarget: number;
  waterIntake: number;
  weightLossRate: number;
  seeResultsDays: number;
};

export type FormContextType = {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
};

export const defaultFormData: FormData = {
  gender: "",
  bodyFatPercent: 0,
  BMI: 0,
  calorieTarget: 0,
  waterIntake: 0,
  weightLossRate: 0,
  seeResultsDays: 0,
};

export const FormContext = createContext<FormContextType | undefined>(undefined);