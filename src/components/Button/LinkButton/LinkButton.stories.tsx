import { Meta, StoryFn } from "@storybook/react";
import LinkButton from "./LinkButton";
import { ButtonProps } from "../Button";

export default {
  title: "Components/Form components/Button/Link Button",
  component: LinkButton,
  argTypes: {
    children: { control: { type: "text" } },
    onClick: { action: "clicked" },
    disabled: { control: { type: "boolean" } },
    destructive: { control: { type: "boolean" } },
  },
} as Meta;

const Template: StoryFn<ButtonProps & { destructive?: boolean }> = (args) => (
  <LinkButton {...args} />
);

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  children: "Shipping & Returns Policy",
  destructive: false,
};

export const DestructiveLink = Template.bind({});
DestructiveLink.args = {
  variant: "link",
  children: "Delete Account",
  destructive: true,
};
