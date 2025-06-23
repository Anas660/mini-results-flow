import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { FormProvider } from "./context/form/FormProvider";
import FormPage from "./features/form/FormPage";
import ResultsPage from "./features/results/ResultsPage";
import SalesPage from "./features/sales/SalesPage";
import { ThemeContext, themeColors } from "./context/theme/ThemeContext";
import ThemeToggle from "./layout/ThemeToggle/ThemeToggle";

function App() {
  const [dark, setDark] = useState(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return false;
    }
    return true;
  });

  const toggle = () => setDark((d) => !d);

  // Use correct colors based on mode
  const colors = dark ? themeColors.dark : themeColors.light;

  return (
    <ThemeContext.Provider value={{ dark, toggle, colors }}>
      <ThemeToggle />
      <FormProvider>
        <Router>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </FormProvider>
    </ThemeContext.Provider>
  );
}

export default App;
