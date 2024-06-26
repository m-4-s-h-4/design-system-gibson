import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: "text",
      defaultValue: "Enter text here",
    },
    error: {
      control: "boolean",
      defaultValue: false,
    },
    type: {
      control: {
        type: "select",
        options: ["number", "text"],
      },
      defaultValue: "text",
    },
    helpTextVariant: {
      control: {
        type: "select",
        options: ["default", "warning", "success"],
      },
      defaultValue: "default",
    },
    helpTextChildren: {
      control: "text",
      defaultValue: "Please enter email connected to the account.",
    },
    label: {
      control: "text",
      defaultValue: "Label",
    },
    showLabel: {
      control: "boolean",
      defaultValue: true,
    },
    showHelpText: {
      control: "boolean",
      defaultValue: true,
    },
    required: {
      control: "boolean",
      defaultValue: false,
    },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text here",
  error: false,
  type: "text",
  helpTextVariant: "default",
  helpTextChildren: "Please enter email connected to the account.",
  label: "Label",
  showLabel: true,
  showHelpText: true,
  required: false,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  placeholder: "Enter text here",
  error: true,
  type: "text",
  helpTextVariant: "default",
  helpTextChildren: "Please enter a valid email.",
  label: "Label",
  showLabel: true,
  showHelpText: true,
  required: true,
};

export const WarningState = Template.bind({});
WarningState.args = {
  placeholder: "Enter text here",
  error: false,
  type: "text",
  helpTextVariant: "warning",
  helpTextChildren: "This is a warning message.",
  label: "Label",
  showLabel: true,
  showHelpText: true,
  required: true,
};

export const SuccessState = Template.bind({});
SuccessState.args = {
  placeholder: "Enter text here",
  error: false,
  type: "text",
  helpTextVariant: "success",
  helpTextChildren: "This is a success message.",
  label: "Label",
  showLabel: true,
  showHelpText: true,
  required: false,
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  placeholder: "Enter value here",
  error: false,
  type: "number",
  helpTextVariant: "default",
  helpTextChildren: "Select input type from the dropdown.",
  label: "Select Input Type",
  showLabel: true,
  showHelpText: true,
  required: false,
};
