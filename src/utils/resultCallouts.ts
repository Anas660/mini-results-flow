import { type FormData } from "./formValidationUtils";

export function getBodyFatCallout(formData: FormData) {
  const { gender, bodyFatPercent } = formData;
  const bodyFat = typeof bodyFatPercent === "number" ? bodyFatPercent : Number(bodyFatPercent);
  if (gender === "male") {
    if (bodyFat < 24) {
      return "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
    } else if (bodyFat >= 25 && bodyFat <= 31) {
      return "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
    } else if (bodyFat >= 32) {
      return "At this level, your body may be stuck in a constant state of inflammation and energy imbalance — making fat loss harder, appetite less predictable, and progress feel like a constant uphill battle.";
    }
  } else if (gender === "female") {
    if (bodyFat < 31) {
      return "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
    } else if (bodyFat >= 32 && bodyFat <= 39) {
      return "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
    } else if (bodyFat >= 40) {
      return "At this level, your body may be stuck in a constant state of inflammation and energy imbalance — making fat loss harder, appetite less predictable, and progress feel like a constant uphill battle.";
    }
  }
  return "";
}

export function getBMICallout(BMI: number) {
  if (typeof BMI === "number" && !isNaN(BMI)) {
    if (BMI < 26) {
      return "You’re right on the edge — just a few small shifts could unlock better energy and faster fat-burning.";
    } else if (BMI >= 30 && BMI <= 34.9) {
      return "At this level, your body may be under more strain than you realize — from hormone balance to inflammation and recovery.";
    } else if (BMI >= 35) {
      return "This BMI range often comes with deeper challenges, like insulin resistance and chronic fatigue — but with the right plan, you can absolutely turn things around.";
    }
  }
  return "";
}

export function getCalorieCallout(calorieTarget: number) {
  if (calorieTarget >= 1300 && calorieTarget <= 1500) {
    return "You’re already close — just upgrading your food quality could unlock smoother fat loss and better focus.";
  } else if (calorieTarget >= 1100 && calorieTarget < 1300) {
    return "At this range, your body is primed to burn fat — but only if you're eating nutrient-dense, low-carb foods that stabilize your system.";
  } else if (calorieTarget < 1100) {
    return "Extreme restriction can backfire — slowing your metabolism, increasing stress, and making results harder to sustain. Keto helps you eat smarter, not just less.";
  }
  return "";
}

export function getWaterCallout(waterIntake: number | string) {
  if (typeof waterIntake === "string" && (waterIntake === "coffee" || waterIntake === "tea")) {
    return {
      headline: "Only Coffee or Tea",
      callout:
        "Only Drinking Coffee or Tea? Caffeine doesn’t hydrate — in fact, it can dehydrate you. Adding just a few glasses of water each day could dramatically boost your energy and fat-burning.",
    };
  } else if (typeof waterIntake === "number" || typeof waterIntake === "string") {
    const intakeNum = Number(waterIntake);
    if (intakeNum > 6) {
      return {
        headline: `${intakeNum} Cups`,
        callout:
          "Drinking over 6 glasses a day? Nice work — your hydration game is strong. Keep it up to support optimal fat loss, steady energy, and fewer cravings.",
      };
    } else if (intakeNum >= 2 && intakeNum <= 6) {
      return {
        headline: `${intakeNum} Cups`,
        callout:
          "Drinking 2-6 glasses means you’re getting closer! Just a few more sips each day could make a real difference in your metabolism and how you feel overall.",
      };
    } else if (intakeNum === 2) {
      return {
        headline: "About 2 Cups",
        callout:
          "Drinking about 2 glasses per day is a great start, but your body is likely still running dry. Upping your intake can improve digestion, curb cravings, and help you burn fat more efficiently.",
      };
    }
  }
  return { headline: "--", callout: "" };
}