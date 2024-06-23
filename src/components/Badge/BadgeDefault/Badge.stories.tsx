import { Meta, StoryFn } from "@storybook/react";
import Badge, { BadgeProps } from "./Badge";

export default {
  title: "Components/Badge/Badge",
  component: Badge,
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

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
  children: "Original",
};

export const Light = Template.bind({});
Light.args = {
  variant: "light",
  children: "Gibson Community",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: "Limited Items",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "New Release",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  children: "Discontinued",
};
