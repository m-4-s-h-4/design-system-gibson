import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import iconComponents from "../icons/iconMapping";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "iconOnly", "link"],
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
    iconType: {
      control: {
        type: "select",
        options: ["Next", ...Object.keys(iconComponents)],
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
  iconType: "Next",
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
  iconType: "Next",
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
  iconType: "Next",
};

IconOnly.argTypes = {
  variant: { control: false },
  children: { control: false },
  icon: { control: false },
  iconType: {
    control: {
      type: "select",
      options: ["Next", ...Object.keys(iconComponents)],
    },
  },
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  children: "Button",
  icon: false,
  iconType: "Next",
};

Link.argTypes = {
  variant: { control: false },
  icon: { control: false },
  iconType: { control: false },
};
