import { Meta, StoryFn } from "@storybook/react";
import Flex, { FlexProps } from "./Flex";
import StyledBox from "../StyledBox";

const meta: Meta<FlexProps> = {
  title: "Components/Layout Components/Flex Layout",
  component: Flex,
  argTypes: {
    grow: { control: { type: "number" } },
    shrink: { control: { type: "number" } },
    direction: {
      control: {
        type: "select",
        options: ["row", "column"],
      },
    },
    wrap: {
      control: {
        type: "select",
        options: ["nowrap", "wrap", "wrap-reverse"],
      },
    },
    xAlign: {
      control: {
        type: "select",
        options: [
          "flex-start",
          "flex-end",
          "center",
          "space-between",
          "space-around",
          "space-evenly",
        ],
      },
    },
    yAlign: {
      control: {
        type: "select",
        options: ["stretch", "flex-start", "flex-end", "center", "baseline"],
      },
    },
    gap: {
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn = (args) => (
  <Flex {...args}>
    <StyledBox />
    <StyledBox />
    <StyledBox />
  </Flex>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  grow: 0,
  shrink: 1,
  direction: "row",
  wrap: "nowrap",
  xAlign: "flex-start",
  yAlign: "stretch",
  gap: "1rem",
};

export const Vertical = Template.bind({});
Vertical.args = {
  grow: 0,
  shrink: 1,
  direction: "column",
  wrap: "nowrap",
  xAlign: "flex-start",
  yAlign: "stretch",
  gap: "1rem",
};
