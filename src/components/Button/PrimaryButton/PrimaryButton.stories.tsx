import { Meta, StoryFn } from "@storybook/react";
import PrimaryButton from "./PrimaryButton";
import { ButtonProps } from "../Button";

export default {
  title: "Components/Form components/Button/Primary Button/Primary Button",
  component: PrimaryButton,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    onClick: { action: "clicked" },
    disabled: { control: { type: "boolean" } },
    destructive: { control: { type: "boolean" } },
  },
} as Meta;

const Template: StoryFn<ButtonProps & { destructive?: boolean }> = (args) => (
  <PrimaryButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Buy Now",
  destructive: false,
};

export const PrimaryDestructive = Template.bind({});
PrimaryDestructive.args = {
  children: "Delete All Items",
  destructive: true,
};
