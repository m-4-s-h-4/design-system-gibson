import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "../Button";
import iconMapping from "../../icons/iconMapping";

export default {
  title: "Components/Button/PrimaryWithIcon",
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

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  variant: "primaryWithIcon",
  children: "Buy Now",
  iconType: "Next",
};
