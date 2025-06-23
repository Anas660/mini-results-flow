export type FormData = {
  gender: string;
  bodyFatPercent: number | "";
  BMI: number | "";
  calorieTarget: number | "";
  waterIntake: number | "";
  weightLossRate: number | "";
  seeResultsDays: number | "";
};

export function validateForm(formData: FormData) {
  return (
    !!formData.gender &&
    typeof formData.bodyFatPercent === "number" &&
    formData.bodyFatPercent > 0 &&
    typeof formData.BMI === "number" &&
    formData.BMI > 0 &&
    typeof formData.calorieTarget === "number" &&
    formData.calorieTarget > 0 &&
    typeof formData.waterIntake === "number" &&
    formData.waterIntake > 0 &&
    typeof formData.weightLossRate === "number" &&
    formData.weightLossRate > 0 &&
    typeof formData.seeResultsDays === "number" &&
    formData.seeResultsDays > 0
  );
}

export function getValidationMessage(formData: FormData) {
  if (!formData.gender) return "Please select your gender.";
  if (
    formData.bodyFatPercent === "" ||
    formData.bodyFatPercent === undefined
  )
    return "Please enter your body fat percentage.";
  if (
    typeof formData.bodyFatPercent === "number" &&
    formData.bodyFatPercent <= 0
  )
    return "Body fat percentage must be greater than 0.";
  if (formData.BMI === "" || formData.BMI === undefined)
    return "Please enter your BMI.";
  if (typeof formData.BMI === "number" && formData.BMI <= 0)
    return "BMI must be greater than 0.";
  if (formData.calorieTarget === "" || formData.calorieTarget === undefined)
    return "Please enter your daily calorie target.";
  if (
    typeof formData.calorieTarget === "number" &&
    formData.calorieTarget <= 0
  )
    return "Calorie target must be greater than 0.";
  if (formData.waterIntake === "" || formData.waterIntake === undefined)
    return "Please select your daily water intake.";
  if (
    typeof formData.waterIntake === "number" &&
    formData.waterIntake <= 0
  )
    return "Water intake must be greater than 0.";
  if (formData.weightLossRate === "" || formData.weightLossRate === undefined)
    return "Please enter your weekly weight loss goal.";
  if (
    typeof formData.weightLossRate === "number" &&
    formData.weightLossRate <= 0
  )
    return "Weekly weight loss goal must be greater than 0.";
  if (formData.seeResultsDays === "" || formData.seeResultsDays === undefined)
    return "Please enter the number of days to see results.";
  if (
    typeof formData.seeResultsDays === "number" &&
    formData.seeResultsDays <= 0
  )
    return "Number of days to see results must be greater than 0.";
  return "";
}