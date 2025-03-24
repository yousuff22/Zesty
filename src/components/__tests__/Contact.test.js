import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../../pages/Contact";

describe("Contact us page Test Case", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  // test("should load button inside contact us component", () => {
  //   render(<Contact />);

  //   // Submit text on webPage
  //   const button2 = screen.getByText("Pokemon");

  //   // Assertion
  //   expect(button2).toBeInTheDocument();
  // });

  it("should load contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("should load input name in contact us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("should load 2 input box in contact us component", () => {
    render(<Contact />);

    // Querying
    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
  });
});
