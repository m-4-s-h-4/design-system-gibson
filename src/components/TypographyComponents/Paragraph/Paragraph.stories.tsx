import { Meta, StoryFn } from "@storybook/react";
import Paragraph, { ParagraphProps } from "./Paragraph";

const meta: Meta<ParagraphProps> = {
  title: "Components/Typography components/Paragraph",
  component: Paragraph,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["bodyLarge", "bodyMedium", "bodySmall"],
      },
      defaultValue: "bodyMedium",
    },
    children: {
      control: "text",
      defaultValue:
        "Jeff Beck is considered one of the best guitarists in history, capable of playing virtually anything in his own unique, soulful style. Jeff Beck got his start playing in the Yardbirds, making groundbreaking music on a ’59 Les Paul Standard. The “YardBurst” is a faithful recreation of this legendary guitar, complete with its unique and instantly identifiable traits, such as the classic white bobbin humbuckers and black single-ply pickguard. An aged Lifton™ hardshell case and a selection of case candy commemorating the life of the legend that is Jeff Beck are also included.",
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<ParagraphProps> = (args) => <Paragraph {...args} />;

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  variant: "bodyLarge",
  children:
    "Jeff Beck is considered one of the best guitarists in history, capable of playing virtually anything in his own unique, soulful style. Jeff Beck got his start playing in the Yardbirds, making groundbreaking music on a ’59 Les Paul Standard. The “YardBurst” is a faithful recreation of this legendary guitar, complete with its unique and instantly identifiable traits, such as the classic white bobbin humbuckers and black single-ply pickguard. An aged Lifton™ hardshell case and a selection of case candy commemorating the life of the legend that is Jeff Beck are also included.",
};

export const BodyMedium = Template.bind({});
BodyMedium.args = {
  variant: "bodyMedium",
  children:
    "Jeff Beck is considered one of the best guitarists in history, capable of playing virtually anything in his own unique, soulful style. Jeff Beck got his start playing in the Yardbirds, making groundbreaking music on a ’59 Les Paul Standard. The “YardBurst” is a faithful recreation of this legendary guitar, complete with its unique and instantly identifiable traits, such as the classic white bobbin humbuckers and black single-ply pickguard. An aged Lifton™ hardshell case and a selection of case candy commemorating the life of the legend that is Jeff Beck are also included.",
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  variant: "bodySmall",
  children:
    "Jeff Beck is considered one of the best guitarists in history, capable of playing virtually anything in his own unique, soulful style. Jeff Beck got his start playing in the Yardbirds, making groundbreaking music on a ’59 Les Paul Standard. The “YardBurst” is a faithful recreation of this legendary guitar, complete with its unique and instantly identifiable traits, such as the classic white bobbin humbuckers and black single-ply pickguard. An aged Lifton™ hardshell case and a selection of case candy commemorating the life of the legend that is Jeff Beck are also included.",
};
