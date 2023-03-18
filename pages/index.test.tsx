import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from ".";

describe("Home page", () => {
  it("should render amounts successfully", () => {
    render(<HomePage />);

    const input = screen.getByRole("spinbutton", { name: "Amount" });

    fireEvent.change(input, { target: { value: 23 } });

    expect(screen.getByTestId("10EurosBillCard").innerHTML).toContain(
      "Quantity: 1"
    );
    expect(screen.getByTestId("5EurosBillCard").innerHTML).toContain(
      "Quantity: 1"
    );
    expect(screen.getByTestId("2EurosCoinCard").innerHTML).toContain(
      "Quantity: 4"
    );
  });
  it("should render error", () => {
    render(<HomePage />);

    const input = screen.getByRole("spinbutton", { name: "Amount" });

    fireEvent.change(input, { target: { value: -25 } });

    expect(screen.getByTestId("10EurosBillCard").innerHTML).toContain(
      "Quantity: 0"
    );
    expect(screen.getByTestId("5EurosBillCard").innerHTML).toContain(
      "Quantity: 0"
    );
    expect(screen.getByTestId("2EurosCoinCard").innerHTML).toContain(
      "Quantity: 0"
    );
    expect(
      screen.getByText("amount should be a positif number")
    ).toBeInTheDocument();
  });
});
