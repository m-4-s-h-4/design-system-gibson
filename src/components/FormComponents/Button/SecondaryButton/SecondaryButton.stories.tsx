import { Meta, StoryFn } from "@storybook/react";
import SecondaryButton from "./SecondaryButton";
import { ButtonProps } from "../ButtonProps";

export default {
  title: "Components/Form components/Button/Secondary Button/Secondary Button",
  component: SecondaryButton,
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
  <SecondaryButton {...args} />
);

export const Secondary = Template.bind({});
Secondary.args = {
  children: "More Info",
  destructive: false,
};

export const DestructiveSecondary = Template.bind({});
DestructiveSecondary.args = {
  children: "Remove from Cart",
  destructive: true,
};
