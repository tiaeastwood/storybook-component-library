import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import RadioGroup from "./RadioGroup";
import ControlledWrapper from "../utils/TestWrapper";

const name = "test name";
const value = "";
const options = [
  { value: "Item 1", label: "Item 1" },
  { value: "Item 2", label: "Item 2" },
  { value: "Item 3", label: "Item 3", disabled: true },
];
const handleChange = vi.fn();

describe("RadioGroup", () => {
  it("Renders Radio Group with expected options", () => {
    render(
      <RadioGroup
        name={name}
        options={options}
        value={value}
        onChange={handleChange}
      />
    );
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    const radioItems = screen.getAllByRole("radio");
    expect(radioItems).toHaveLength(options.length);
  });

  it("Disabled options render as disabled", async () => {
    render(
      <RadioGroup
        name={name}
        options={options}
        value={value}
        onChange={handleChange}
      />
    );
    const radioItems = screen.getAllByRole("radio");
    await userEvent.click(radioItems[0]);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(options[0].value);
  });

    it("onChange is called when radio selected", () => {
      render(
        <RadioGroup
          name={name}
          options={options}
          value={value}
          onChange={handleChange}
        />
      );
      const radioItems = screen.getAllByRole("radio");
      expect(radioItems[2]).toHaveAttribute("disabled");
    });

  it("The correct radio input is selected", async () => {
    render(
      <ControlledWrapper initialValue="">
        {(value, setValue) => (
          <RadioGroup
            name="group"
            options={options}
            value={value}
            onChange={setValue}
          />
        )}
      </ControlledWrapper>
    );
    const radioItems = screen.getAllByRole("radio");
    radioItems.forEach((radio) => {
      expect(radio).not.toBeChecked();
    });

    await userEvent.click(radioItems[0]);

    expect(radioItems[0]).toBeChecked();
    expect(radioItems[1]).not.toBeChecked();
    expect(radioItems[2]).not.toBeChecked();

    await userEvent.click(radioItems[1]);

    expect(radioItems[0]).not.toBeChecked();
    expect(radioItems[1]).toBeChecked();
    expect(radioItems[2]).not.toBeChecked();
  });
});
