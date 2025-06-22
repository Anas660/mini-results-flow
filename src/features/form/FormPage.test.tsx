import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { FormProvider } from "../../context/FormProvider";
import FormPage from "./FormPage";

describe("FormPage", () => {
  it("disables submit button until all fields are filled", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <FormPage />
        </FormProvider>
      </MemoryRouter>
    );
    // Debug the DOM
    screen.debug();

    const button = screen.getByRole("button", { name: /see my results/i });
    expect(button).toBeDisabled();
  });
});
