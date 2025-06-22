import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FormProvider } from "./context/FormProvider"
import FormPage from "./features/form/FormPage";
import ResultsPage from "./features/results/ResultsPage";

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;