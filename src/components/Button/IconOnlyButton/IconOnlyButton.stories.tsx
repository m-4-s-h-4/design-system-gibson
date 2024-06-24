import { Meta, StoryFn } from "@storybook/react";
import IconOnlyButton from "./IconOnlyButton";
import iconMapping from "../../icons/iconMapping";

export default {
  title: "Components/Form components/Button/IconOnlyButton",
  component: IconOnlyButton,
  argTypes: {
    onClick: { action: "clicked" },
    disabled: { control: { type: "boolean" } },
    iconType: {
      control: { type: "select" },
      options: Object.keys(iconMapping),
    },
  },
} as Meta;

const Template: StoryFn = (args) => <IconOnlyButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconType: "Next",
  disabled: false,
};
