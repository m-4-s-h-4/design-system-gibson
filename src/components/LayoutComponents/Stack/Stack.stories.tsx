import { Meta, StoryFn } from "@storybook/react";
import Stack, { StackProps } from "./Stack";
import StyledBox from "../StyledBox";

export default {
  title: "Components/Layout Components/Stack Layout",
  component: Stack,
  argTypes: {
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    spacing: {
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: StoryFn<StackProps> = (args) => (
  <Stack {...args}>
    <StyledBox />
    <StyledBox />
    <StyledBox />
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: "horizontal",
  spacing: "1rem",
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: "vertical",
  spacing: "1rem",
};
