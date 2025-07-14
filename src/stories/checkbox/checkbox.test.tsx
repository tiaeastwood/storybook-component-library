import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Checkbox from "./checkbox";

const handleChange = vi.fn();
const label = "I'm a label";

describe("Checkbox", () => {
  it("Renders the label if label prop passed", () => {
    render(<Checkbox checked={true} onChange={handleChange} label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("Renders the checkbox disabled if disabled prop passed", () => {
    render(
      <Checkbox
        checked={true}
        onChange={handleChange}
        label={label}
        disabled={true}
      />
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });

  it("Passing large variant prop will render large variant", () => {
    render(
      <Checkbox
        checked={true}
        onChange={handleChange}
        label={label}
        variant={"large"}
      />
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveStyle("width:24px");
  });
});
