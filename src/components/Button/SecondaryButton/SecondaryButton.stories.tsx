import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "../Button";
export default {
  title: "Components/Button/Secondary",
  component: Button,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    onClick: { action: "clicked" },
    disabled: { control: { type: "boolean" } },
    icon: { table: { disable: true } },
    iconType: { table: { disable: true } },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "More Info",
};
