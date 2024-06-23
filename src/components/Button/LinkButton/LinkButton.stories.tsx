import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "../Button";

export default {
  title: "Components/Button/Link",
  component: Button,
  argTypes: {
    children: { control: { type: "text" } },
    onClick: { action: "clicked" },
    disabled: { control: { type: "boolean" } },
    icon: { table: { disable: true } },
    iconType: { table: { disable: true } },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  children: "Shipping & Returns Policy",
};
