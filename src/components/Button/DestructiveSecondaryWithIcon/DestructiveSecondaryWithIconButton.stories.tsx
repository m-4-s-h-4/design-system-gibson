import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "../Button";
import iconMapping from "../../icons/iconMapping";

export default {
  title: "Components/Button/DestructiveSecondaryWithIcon",
  component: Button,
  argTypes: {
    children: { control: { type: "text" } },
    onClick: { action: "clicked" },
    disabled: { control: { type: "boolean" } },
    icon: { table: { disable: true } },
    iconType: {
      control: { type: "select" },
      options: Object.keys(iconMapping),
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const DestructiveSecondaryWithIcon = Template.bind({});
DestructiveSecondaryWithIcon.args = {
  variant: "destructiveSecondaryWithIcon",
  children: "Remove Item",
  iconType: "Delete",
};
