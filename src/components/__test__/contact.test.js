import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load the contact us component", () => {
	render(<Contact />);

	const heading = screen.getByRole("heading");

	// Assertion
	expect(heading).toBeInTheDocument();
});

test("Should button is present in the 'Contact' component", function () {
	render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
});
