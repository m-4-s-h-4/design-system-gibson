import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "iconOnly"],
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
    onClick: {
      action: "clicked",
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    icon: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps & { icon: boolean }> = (args) => {
  const { icon, variant, ...rest } = args;
  return <Button {...rest} icon={icon} variant={variant} />;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Button",
  icon: false,
};

Primary.argTypes = {
  children: { control: { type: "text" } },
  icon: { control: { type: "boolean" } },
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Button",
  icon: false,
};

Secondary.argTypes = {
  children: { control: { type: "text" } },
  icon: { control: { type: "boolean" } },
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  variant: "iconOnly",
  icon: true,
  children: undefined,
};

IconOnly.argTypes = {
  children: { control: false },
  icon: { control: false },
};
