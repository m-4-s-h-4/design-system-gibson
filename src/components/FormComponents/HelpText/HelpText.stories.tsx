import { Meta, StoryFn } from "@storybook/react";
import HelpText, { HelpTextProps } from "./HelpText";

const meta: Meta<HelpTextProps> = {
  title: "Components/Form components/Help Text",
  component: HelpText,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "error", "warning", "success"],
      },
      defaultValue: "default",
    },
    children: {
      control: "text",
      defaultValue: "This is a help text.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<HelpTextProps> = (args) => <HelpText {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  children: "Please enter your guitar model.",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  children: "Invalid guitar settings. Please check and try again.",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: "Your guitar might need a neck adjustment soon.",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Your guitar setup is complete. Enjoy your playing!",
};
