import { Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "./ButtonProps";
import iconMapping from "../../../assets/icons/iconMapping";
import Button from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Form components/Button/Button Main",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "icon-only",
          "primary-with-icon",
          "secondary-with-icon",
          "link",
        ],
      },
    },
    destructive: {
      control: {
        type: "boolean",
      },
    },
    iconType: {
      control: {
        type: "select",
        options: Object.keys(iconMapping),
      },
    },
    children: {
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Button",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  variant: "icon-only",
  iconType: "Next",
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  variant: "primary-with-icon",
  iconType: "Next",
  children: "Primary with Icon",
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  variant: "secondary-with-icon",
  iconType: "Next",
  children: "Secondary with Icon",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  children: "Link Button",
};
