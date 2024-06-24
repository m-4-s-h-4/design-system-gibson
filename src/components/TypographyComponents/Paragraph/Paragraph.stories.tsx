import { Meta, StoryFn } from "@storybook/react";
import Paragraph, { ParagraphProps } from "./Paragraph";

export default {
  title: "Components/Typography components/Paragraph",
  component: Paragraph,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["large", "medium", "small"],
      },
      defaultValue: "medium",
    },
    children: {
      control: "text",
      defaultValue:
        "Guitars have played pivotal roles in some of the most iconic gigs in music history. One such moment was Jimi Hendrix's legendary performance at Woodstock in 1969, where his electric rendition of The Star-Spangled Banner captivated the audience and became an emblem of the era. ",
    },
  },
} as Meta;

const Template: StoryFn<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Large = Template.bind({});
Large.args = {
  variant: "large",
  children:
    "Guitars have played pivotal roles in some of the most iconic gigs in music history. One such moment was Jimi Hendrix's legendary performance at Woodstock in 1969, where his electric rendition of The Star-Spangled Banner captivated the audience and became an emblem of the era. ",
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "medium",
  children:
    "Guitars have played pivotal roles in some of the most iconic gigs in music history. One such moment was Jimi Hendrix's legendary performance at Woodstock in 1969, where his electric rendition of The Star-Spangled Banner captivated the audience and became an emblem of the era. ",
};

export const Small = Template.bind({});
Small.args = {
  variant: "small",
  children:
    "Guitars have played pivotal roles in some of the most iconic gigs in music history. One such moment was Jimi Hendrix's legendary performance at Woodstock in 1969, where his electric rendition of The Star-Spangled Banner captivated the audience and became an emblem of the era. ",
};
