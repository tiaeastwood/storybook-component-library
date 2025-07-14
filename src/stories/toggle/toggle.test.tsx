import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Toggle from "./Toggle";

const handleChange = vi.fn();
const label = "I'm a label";

describe("Toggle", () => {
  it("Renders the label is label prop passed", () => {
    render(<Toggle checked={true} onChange={handleChange} label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("Is disabled if disabled prop passed", () => {
    render(<Toggle checked={true} onChange={handleChange} disabled={true} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });

  it("renders the label to the right of the switch by default", () => {
    render(<Toggle checked={true} onChange={handleChange} label={label} />);
    const labelElement = screen.getByText(label);
    const parent = labelElement.parentElement;
    expect(parent?.lastChild).toBe(labelElement);
  });

  it("renders the label to the left of the switch when labelLeft is true", () => {
    render(
      <Toggle
        checked={true}
        onChange={handleChange}
        label={label}
        labelLeft={true}
      />
    );
    const labelElement = screen.getByText(label);
    const parent = labelElement.parentElement;
    expect(parent?.firstChild).toBe(labelElement);
  });
});
