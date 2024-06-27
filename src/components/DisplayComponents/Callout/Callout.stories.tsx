import { Meta, StoryFn } from "@storybook/react";
import Callout, { CalloutProps } from "./Callout";

const meta: Meta<CalloutProps> = {
  title: "Components/Display Components/Callout",
  component: Callout,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "success", "warning", "error", "special"],
      },
      defaultValue: "default",
    },
    heading: {
      control: "text",
      defaultValue: "Gibson Guitar Collection",
    },
    text: {
      control: "text",
      defaultValue:
        "Discover the legendary Gibson guitars that have shaped the sound of generations.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<CalloutProps> = (args) => <Callout {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  heading: "Gibson Guitar Collection",
  text: "Discover the legendary Gibson guitars that have shaped the sound of generations.",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  heading: "Gibson Guitar Collection",
  text: "Discover the legendary Gibson guitars that have shaped the sound of generations.",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  heading: "Gibson Guitar Collection",
  text: "Discover the legendary Gibson guitars that have shaped the sound of generations.",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  heading: "Gibson Guitar Collection",
  text: "Discover the legendary Gibson guitars that have shaped the sound of generations.",
};

export const Special = Template.bind({});
Special.args = {
  variant: "special",
  heading: "Gibson Guitar Collection",
  text: "Discover the legendary Gibson guitars that have shaped the sound of generations.",
};
