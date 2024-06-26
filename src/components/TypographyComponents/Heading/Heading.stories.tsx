import { Meta, StoryFn } from "@storybook/react";
import Heading, { HeadingProps } from "./Heading";

export default {
  title: "Components/Typography components/Heading",
  component: Heading,
  argTypes: {
    level: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5"],
      },
      defaultValue: "h1",
    },
    children: {
      control: "text",
      defaultValue: "The Rhythm of Innovation",
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<HeadingProps>;

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  level: "h1",
  children: "The Rhythm of Innovation",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  level: "h2",
  children: "The Rhythm of Innovation",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  level: "h3",
  children: "The Rhythm of Innovation",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  level: "h4",
  children: "The Rhythm of Innovation",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  level: "h5",
  children: "The Rhythm of Innovation",
};
