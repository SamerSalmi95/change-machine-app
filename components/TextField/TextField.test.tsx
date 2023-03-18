import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

describe("TextField", () => {
  const props = {
    label: "Amount",
    updateAmount: jest.fn(),
  };
  it("should render successfully", () => {
    render(<TextField {...props} />);

    expect(
      screen.getByRole("spinbutton", { name: "Amount" })
    ).toBeInTheDocument();
  });
  it("should call updateAmount function with the input value", () => {
    render(<TextField {...props} />);
    const input = screen.getByRole("spinbutton", { name: "Amount" });

    fireEvent.change(input, { target: { value: 23 } });

    expect(props.updateAmount).toBeCalledWith(23);
  });
  it("should display error", () => {
    render(<TextField {...props} errorLabel="error label" />);

    expect(screen.getByText("error label")).toBeInTheDocument();
  });
});
