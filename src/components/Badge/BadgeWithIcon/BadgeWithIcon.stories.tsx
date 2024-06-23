import { Meta, StoryFn } from "@storybook/react";
import BadgeWithIcon, { BadgeWithIconProps } from "./BadgeWithIcon";

export default {
  title: "Components/Badge/BadgeWithIcon",
  component: BadgeWithIcon,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["dark", "light", "warning", "success", "error"],
      },
      defaultValue: "light",
    },
    children: {
      control: "text",
      defaultValue: "Badge Text",
    },
  },
} as Meta;

const Template: StoryFn<BadgeWithIconProps> = (args) => (
  <BadgeWithIcon {...args} />
);

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
  children: "Dark Badge",
};

export const Light = Template.bind({});
Light.args = {
  variant: "light",
  children: "Light Badge",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: "Warning Badge",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Success Badge",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  children: "Error Badge",
};
