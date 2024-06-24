import { Meta, StoryFn } from "@storybook/react";
import ButtonWithIcon, { ButtonWithIconProps } from "./SecondaryWithIcon";
import iconMapping from "../../icons/iconMapping";

export default {
  title:
    "Components/Form components/Button/Secondary Button/Secondary Button with Icon",
  component: ButtonWithIcon,
  argTypes: {
    children: { control: { type: "text" } },
    onClick: { action: "clicked" },
    disabled: { control: { type: "boolean" } },
    destructive: { control: { type: "boolean" } },
    iconType: {
      control: { type: "select" },
      options: Object.keys(iconMapping),
    },
  },
} as Meta;

const Template: StoryFn<ButtonWithIconProps & { destructive?: boolean }> = (
  args
) => <ButtonWithIcon {...args} />;

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  children: "Subscribe",
  iconType: "Next",
  destructive: false,
};

export const DestructiveSecondaryWithIcon = Template.bind({});
DestructiveSecondaryWithIcon.args = {
  children: "Remove Item",
  iconType: "Delete",
  destructive: true,
};
