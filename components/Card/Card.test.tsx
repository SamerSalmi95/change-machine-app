import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  const props = {
    image:'../../ten-euros.jpeg',
    title:"10 euros bill",
    amount:10
  };
  it("should render successfully", () => {
    render(<Card {...props} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveStyle(`background-image: url(${props.image})`);
    expect(screen.getByText("10 euros bill")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 10")).toBeInTheDocument();
  });
});
