import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FormProvider } from "../../context/form/FormProvider";
import ResultsPage from "./ResultsPage";

describe("ResultsPage", () => {
  it("renders the results header and progress dots", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    // Check for the header
    expect(screen.getByText(/your results/i)).toBeInTheDocument();
    // Check for at least one progress dot by style/class (since no role)
    const dots = document.querySelectorAll("span.inline-block.rounded-full");
    expect(dots.length).toBeGreaterThan(0);
  });

  it("renders the main body fat percentage heading", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        name: (content) =>
          /your body fat/i.test(content) && /percentage is/i.test(content),
      })
    ).toBeInTheDocument();
  });

  it("renders the 'Here’s Why That Matters' subheading", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/here’s why that matters/i)).toBeInTheDocument();
  });

  it("renders the Next button", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
  });

  it("renders the logo image", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  });
});

describe("ResultsPage", () => {
  it("renders the results header and progress dots", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/your results/i)).toBeInTheDocument();
    const dots = document.querySelectorAll("span.inline-block.rounded-full");
    expect(dots.length).toBeGreaterThan(0);
  });

  it("renders the main body fat percentage heading", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        name: (content) =>
          /your body fat/i.test(content) && /percentage is/i.test(content),
      })
    ).toBeInTheDocument();
  });

  it("renders the 'Here’s Why That Matters' subheading", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/here’s why that matters/i)).toBeInTheDocument();
  });

  it("renders the Next button", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
  });

  it("renders the logo image", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  });

  it("renders the muscle mass image", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    expect(screen.getByAltText(/muscle mass/i)).toBeInTheDocument();
  });

  it("renders the explanation paragraph", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    expect(
      screen.getByText(/your body fat percentage gives a clearer picture/i)
    ).toBeInTheDocument();
  });

  it("Next button is clickable", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    const nextBtn = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextBtn);
    // You can add more assertions here if clicking changes the UI or route
    expect(nextBtn).toBeInTheDocument();
  });

  it("progress dots have correct active/inactive styles", () => {
    render(
      <MemoryRouter>
        <FormProvider>
          <ResultsPage />
        </FormProvider>
      </MemoryRouter>
    );
    const dots = document.querySelectorAll("span.inline-block.rounded-full");
    // The first dot should have the active color
    expect(dots[0]).toHaveStyle("background-color: rgb(54, 188, 159)");
    // The rest should have the inactive color
    for (let i = 1; i < dots.length; i++) {
      expect(dots[i]).toHaveStyle("background-color: rgb(209, 213, 219)");
    }
  });
});

// We recommend installing an extension to run jest tests.
