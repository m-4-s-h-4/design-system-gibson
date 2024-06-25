import { Meta, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./Card";
import iconMapping from "../../../assets/icons/iconMapping";
import logosMapping from "../../../assets/logos/logosMapping";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    icon1: {
      control: {
        type: "select",
        options: Object.keys(iconMapping),
      },
    },
    icon2: {
      control: {
        type: "select",
        options: Object.keys(iconMapping),
      },
    },
    showIcons: {
      control: {
        type: "boolean",
      },
    },
    logo: {
      control: {
        type: "select",
        options: Object.keys(logosMapping),
      },
    },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const WithTwoIcons = Template.bind({});
WithTwoIcons.args = {
  imageSrc:
    "https://media.sweetwater.com/m/products/image/0fb0ee1b5aPAgEP7oJa43wAiEAjm9wvUzHaoThk0.wm-lh.png?v=0fb0ee1b5a7e0579",
  icon1: "Cart",
  icon2: "Favourite",
  showIcons: true,
  logo: "Furch",
};

export const WithOneIcon = Template.bind({});
WithOneIcon.args = {
  imageSrc:
    "https://media.sweetwater.com/m/products/image/0fb0ee1b5aPAgEP7oJa43wAiEAjm9wvUzHaoThk0.wm-lh.png?v=0fb0ee1b5a7e0579",
  icon1: "Favourite",
  icon2: undefined,
  showIcons: true,
  logo: "Taylor",
};

export const WithNoIcons = Template.bind({});
WithNoIcons.args = {
  imageSrc:
    "https://media.sweetwater.com/m/products/image/0fb0ee1b5aPAgEP7oJa43wAiEAjm9wvUzHaoThk0.wm-lh.png?v=0fb0ee1b5a7e0579",
  icon1: undefined,
  icon2: undefined,
  showIcons: false,
  logo: "Guild",
};
