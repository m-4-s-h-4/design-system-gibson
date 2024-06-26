import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/Form Components/Input",
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
    errorMessage: {
      control: "text",
      defaultValue: "Please enter a valid email.",
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
  errorMessage: "Please enter a valid email.",
  type: "text",
  helpTextVariant: "default",
  helpTextChildren: "Please enter email connected to the account.",
  label: "Email",
  showLabel: true,
  showHelpText: true,
  required: false,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  placeholder: "Enter your email",
  error: true,
  errorMessage: "Please enter a valid email.",
  type: "text",
  helpTextVariant: "default",
  helpTextChildren: "Please enter email connected to the account.",
  label: "Email",
  showLabel: true,
  showHelpText: true,
  required: true,
};

export const WarningState = Template.bind({});
WarningState.args = {
  placeholder: "Enter your email",
  error: false,
  errorMessage: "Your email is already in the system.",
  type: "text",
  helpTextVariant: "warning",
  helpTextChildren: "Your email is already in the system.",
  label: "Email",
  showLabel: true,
  showHelpText: true,
  required: true,
};

export const SuccessState = Template.bind({});
SuccessState.args = {
  placeholder: "Enter your email",
  error: false,
  errorMessage: "Your email was received.",
  type: "text",
  helpTextVariant: "success",
  helpTextChildren: "Your email was received.",
  label: "Email",
  showLabel: true,
  showHelpText: true,
  required: false,
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  placeholder: "Enter value here",
  error: false,
  errorMessage: "Please enter a valid number.",
  type: "number",
  helpTextVariant: "default",
  helpTextChildren: "How many guitars would you like.",
  label: "Enter number of guitars",
  showLabel: true,
  showHelpText: true,
  required: false,
};
