import { Meta, StoryFn } from "@storybook/react";
import ButtonWithIcon, { ButtonWithIconProps } from "./PrimaryWithIcon";
import iconMapping from "../../../../assets/icons/iconMapping";

export default {
  title: "Components/Form components/Button/Primary Button/Primary With Icon",
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

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  children: "Buy Now",
  iconType: "Next",
  destructive: false,
};

export const DestructiveWithIcon = Template.bind({});
DestructiveWithIcon.args = {
  children: "Delete all items",
  iconType: "Delete",
  destructive: true,
};
