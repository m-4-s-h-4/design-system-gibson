import { Meta, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./Card";

const meta: Meta<CardProps> = {
  title: "Components/Display Components/Cards/Card",
  component: Card,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "headingOnly",
          "full",
          "headingWithButton",
          "primaryWithButton",
        ],
      },
      defaultValue: "full",
    },
    heading: {
      control: "text",
      defaultValue: "Gibson Guitar Collection",
    },
    text: {
      control: "text",
      defaultValue: "Explore iconic designs and signature tones.",
    },
    buttonText: {
      control: "text",
      defaultValue: "Explore",
    },
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "full",
  heading: "Gibson Guitar Collection",
  text: "Explore iconic designs and signature tones.",
  buttonText: "Explore",
};

export const HeadingOnly = Template.bind({});
HeadingOnly.args = {
  variant: "headingOnly",
  heading: "Gibson Guitar Collection",
};

export const HeadingWithButton = Template.bind({});
HeadingWithButton.args = {
  variant: "headingWithButton",
  heading: "Gibson Guitar Collection",
  text: "Explore iconic designs and signature tones.",
  buttonText: "Explore",
};

export const PrimaryWithButton = Template.bind({});
PrimaryWithButton.args = {
  variant: "primaryWithButton",
  heading: "Gibson Guitar Collection",
  text: "Explore iconic designs and signature tones.",
  buttonText: "Explore",
};
