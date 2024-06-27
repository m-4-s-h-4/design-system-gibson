import { Meta, StoryFn } from "@storybook/react";
import BadgeWithIcon, { BadgeProps } from "./Badge";

const meta: Meta<BadgeProps> = {
  title: "Components/Text content components/Badge",
  component: BadgeWithIcon,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["dark", "light", "brown", "warning", "success", "error"],
      },
      defaultValue: "light",
    },
    children: {
      control: "text",
      defaultValue: "Badge Text",
    },
    showIcon: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
  tags: ["autodocs"],
};

export default meta;
const Template: StoryFn<BadgeProps> = (args) => <BadgeWithIcon {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
  children: "New Release",
  showIcon: false,
};

export const Light = Template.bind({});
Light.args = {
  variant: "light",
  children: "Customer Support",
  showIcon: false,
};

export const Brown = Template.bind({});
Brown.args = {
  variant: "brown",
  children: "Popular Choice",
  showIcon: false,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: "Connection Lost",
  showIcon: false,
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Purchase Complete",
  showIcon: false,
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  children: "No items left",
  showIcon: false,
};
