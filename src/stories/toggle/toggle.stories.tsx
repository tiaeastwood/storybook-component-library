import { useState } from "react";
import type { Meta } from "@storybook/react-vite";
import { fn } from "storybook/test";

import ToggleSwitch from "./Toggle";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Toggle",
  component: ToggleSwitch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `action` to spy on the onChange arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

const label = "I'm a label";

export const Default = (args: React.ComponentProps<typeof ToggleSwitch>) => {
  const [checked, setChecked] = useState(false);
  return <ToggleSwitch {...args} checked={checked} onChange={setChecked} />;
};

export const WithLabel = () => {
  const [checked, setChecked] = useState(false);
  return <ToggleSwitch label={label} checked={checked} onChange={setChecked} />;
};

export const WithLabelOnLeft = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ToggleSwitch
      label={label}
      checked={checked}
      onChange={setChecked}
      labelLeft={true}
    />
  );
};

export const IsDisabled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ToggleSwitch checked={checked} onChange={setChecked} disabled={true} />
  );
};
