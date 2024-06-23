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
  children: "New Release",
};

export const Light = Template.bind({});
Light.args = {
  variant: "light",
  children: "Customer Support",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: "Connection Lost",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Purchase Complete",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  children: "No items left",
};
