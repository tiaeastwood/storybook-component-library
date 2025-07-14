import type { Meta, StoryFn } from "@storybook/react-vite";
import { Card } from "./Card";

const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;

export const WithTitle: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <p>This is some card content!</p>
    <button>Click me</button>
  </Card>
);
WithTitle.args = {
  title: "I am a Title",
};

export const WithoutTitle: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <p>This is some card content!</p>
    <button>Click me</button>
  </Card>
);
