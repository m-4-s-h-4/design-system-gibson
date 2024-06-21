import { Meta, StoryFn } from "@storybook/react";
import Heading, { HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    as: {
      control: false,
    },
    variant: {
      control: false,
    },
  },
} as Meta;

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  as: "h1",
  variant: "heading10",
  children: "This is an H1 Heading",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  as: "h2",
  variant: "heading20",
  children: "This is an H2 Heading",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  as: "h3",
  variant: "heading30",
  children: "This is an H3 Heading",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  as: "h4",
  variant: "heading40",
  children: "This is an H4 Heading",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  as: "h5",
  variant: "heading50",
  children: "This is an H5 Heading",
};
