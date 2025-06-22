import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SalesPage from "./SalesPage";

describe("SalesPage", () => {
  it("renders offer card and guarantee section", () => {
    render(
      <MemoryRouter>
        <SalesPage />
      </MemoryRouter>
    );
    // Check that at least one element with "guarantee" is present
    expect(screen.getAllByText(/guarantee/i).length).toBeGreaterThan(0);
    // Or, check for a specific heading:
    expect(screen.getByRole("heading", { name: /guarantee/i })).toBeInTheDocument();
    // Add more assertions for sticky CTA, offer card, etc.
  });
});