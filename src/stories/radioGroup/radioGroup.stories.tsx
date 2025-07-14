import { useState } from "react";
import type { Meta } from "@storybook/react-vite";
import { fn } from "storybook/test";

import RadioGroup from "./RadioGroup";

const options = [
  { value: "Item 1", label: "Item 1" },
  { value: "Item 2", label: "Item 2" },
  { value: "Item 3", label: "Item 3", disabled: true },
];

const meta = {
  title: "Example/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},

  args: {
    onChange: fn(),
    options: options,
    name: "radio group",
    value: "",
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

export const Default = (args: React.ComponentProps<typeof RadioGroup>) => {
  const [value, setValue] = useState("");
  return <RadioGroup {...args} value={value} onChange={setValue} />;
};

export const Row = (args: React.ComponentProps<typeof RadioGroup>) => {
  const [value, setValue] = useState("");
  return (
    <RadioGroup {...args} value={value} onChange={setValue} direction={"row"} />
  );
};
