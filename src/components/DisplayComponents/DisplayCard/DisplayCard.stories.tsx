import { Meta, StoryFn } from "@storybook/react";
import DisplayCard, { DisplayCardProps } from "./DisplayCard";

const meta: Meta<DisplayCardProps> = {
  title: "Components/Display Components/Cards/DisplayCard",
  component: DisplayCard,
  argTypes: {
    heading: {
      control: "text",
      defaultValue: "MAKE HISTORY AT GIBSON",
    },
    text: {
      control: "text",
      defaultValue:
        "For timeless sound and style, nothing beats a Gibson. Since 1946, Gibson Musical Instruments Corporation (GMIC) has been tireless in its commitment to making the highest quality instruments, amps, pro-audio, accessories and digital products – and life sounds better because of it. Through a portfolio of brands that includes Fender®, Squier®, Gretsch® guitars, Jackson®, EVH® and Charvel®, our mission is to inspire every player at every stage, and we look for the same sense of passion and purpose in our employees.",
    },
    secondText: {
      control: "text",
      defaultValue:
        "This is the second paragraph, providing additional information about the topic discussed in the first paragraph.",
    },
    imageSrc: {
      control: "text",
      defaultValue: "https://via.placeholder.com/320x367",
    },
    paragraphs: {
      control: "number",
      defaultValue: 1,
    },
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<DisplayCardProps> = (args) => <DisplayCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  heading: "MAKE HISTORY AT GIBSON",
  text: "For timeless sound and style, nothing beats a Gibson. Since 1946, Gibson Musical Instruments Corporation (GMIC) has been tireless in its commitment to making the highest quality instruments, amps, pro-audio, accessories and digital products – and life sounds better because of it.",
  secondText:
    "Through a portfolio of brands that includes Fender®, Squier®, Gretsch® guitars, Jackson®, EVH® and Charvel®, our mission is to inspire every player at every stage, and we look for the same sense of passion and purpose in our employees.",
  imageSrc:
    "https://www.fmicassets.com/sites/fender.com/features-microsite/img/careers/content-slot-14.jpg",
  paragraphs: 2,
};
