import { Meta, StoryFn } from "@storybook/react";
import Heading, { HeadingProps } from "./Heading";

export default {
  title: "Components/Typography components/Heading",
  component: Heading,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    as: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: [
          "heading10",
          "heading20",
          "heading30",
          "heading40",
          "heading50",
        ],
      },
    },
  },
} as Meta;

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  as: "h1",
  variant: "heading10",
  children: "The Rhythm of Innovation",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  as: "h2",
  variant: "heading20",
  children: "The Rhythm of Innovation",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  as: "h3",
  variant: "heading30",
  children: "The Rhythm of Innovation",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  as: "h4",
  variant: "heading40",
  children: "The Rhythm of Innovation",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  as: "h5",
  variant: "heading50",
  children: "The Rhythm of Innovation",
};
