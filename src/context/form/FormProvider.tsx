import React, { useState } from "react";
import { FormContext, defaultFormData, type FormData } from "./FormContext";

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormDataState] = useState<FormData>(defaultFormData);

  const setFormData = (data: Partial<FormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormDataState(defaultFormData);
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
