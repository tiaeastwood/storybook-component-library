import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Card } from "./Card";

const title = "I'm a title!";
const child = <div data-testId="child">I am a child</div>;

describe("Card", () => {
  it("Renders the title if a title prop is passed", () => {
    render(<Card title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
  it("Renders not render the title if a title prop is not passed", () => {
    render(<Card />);
    expect(screen.queryByText(title)).not.toBeInTheDocument();
  });
  it("Renders children", () => {
    render(<Card>{child}</Card>);
    expect(screen.getByTestId(/child/i)).toBeInTheDocument();
  });
});
