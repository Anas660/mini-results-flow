import React, { useState, useEffect } from "react";
import { FormContext, defaultFormData, type FormData } from "./FormContext";

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormDataState] = useState<FormData>(() => {
    const stored = localStorage.getItem("formData");
    return stored ? JSON.parse(stored) : defaultFormData;
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const setFormData = (data: Partial<FormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormDataState(defaultFormData);
    localStorage.removeItem("formData");
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
