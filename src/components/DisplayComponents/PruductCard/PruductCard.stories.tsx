import { Meta, StoryFn } from "@storybook/react";
import Card, { ProductCardProps } from "./ProductCard";
import iconMapping from "../../../assets/icons/iconMapping";
import logosMapping from "../../../assets/logos/logosMapping";
import { BadgeProps } from "../../TextContentComponents/Badge/Badge";

const meta: Meta<typeof Card> = {
  title: "Components/Display Components/Cards/Product Card",
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
    badges: {
      control: {
        type: "object",
      },
      defaultValue: [
        { variant: "dark", children: "New", showIcon: true },
        { variant: "warning", children: "Limited", showIcon: true },
        { variant: "brown", children: "Top", showIcon: true },
        { variant: "light", children: "Bestseller", showIcon: true },
      ] as (BadgeProps & { showIcon: boolean })[],
    },
    numberOfBadges: {
      control: {
        type: "number",
        min: 0,
        max: 4,
      },
      defaultValue: 4,
    },
    aboutText: {
      control: {
        type: "text",
      },
      defaultValue: "Gibson Custom Les Paul",
    },
    price: {
      control: {
        type: "text",
      },
      defaultValue: "$9,999",
    },
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<
  ProductCardProps & {
    numberOfBadges: number;
    price: string;
    aboutText: string;
  }
> = (args) => <Card {...args} />;

export const CardWithTwoIconsNoBadges = Template.bind({});
CardWithTwoIconsNoBadges.args = {
  imageSrc:
    "https://files.ekmcdn.com/apollomusic/images/epiphone-inspired-by-gibson-custom-1959-les-paul-standard-factory-burst-4440-p.png",
  aboutText: "Epiphone Les Paul",
  price: "$1,299",
  icon1: "Cart",
  icon2: "Favourite",
  showIcons: true,
  logo: "Furch",
  numberOfBadges: 0,
  badges: [],
};

export const CardWithNoIconsNoBadges = Template.bind({});
CardWithNoIconsNoBadges.args = {
  imageSrc:
    "https://www.twintown.com/cdn/shop/files/Gibson_Les_Paul_Standard_50s_Figured_Top_Electric_Guitar_Translucent_Fuchsia_with_Case.png?v=1695829749",
  aboutText: "Gibson Les Paul",
  price: "$8,499",
  icon1: undefined,
  icon2: undefined,
  showIcons: false,
  logo: "Guild",
  numberOfBadges: 0,
  badges: [],
};

export const CardWithTwoIconsTwoBadges = Template.bind({});
CardWithTwoIconsTwoBadges.args = {
  imageSrc:
    "https://files.ekmcdn.com/apollomusic/images/epiphone-inspired-by-gibson-custom-1959-les-paul-standard-factory-burst-4440-p.png",
  aboutText: "Epiphone Les Paul",
  price: "$1,299",
  icon1: "Cart",
  icon2: "Favourite",
  showIcons: true,
  logo: "Taylor",
  numberOfBadges: 2,
  badges: [
    { variant: "dark", children: "New", showIcon: true },
    { variant: "error", children: "Limited", showIcon: true },
  ],
};

export const CardWithNoIconsFourBadges = Template.bind({});
CardWithNoIconsFourBadges.args = {
  imageSrc:
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/Gibson_LP_Classic.png",
  aboutText: "Gibson Les Paul",
  price: "$2,499",
  icon1: undefined,
  icon2: undefined,
  showIcons: false,
  logo: "Guild",
  numberOfBadges: 4,
  badges: [
    { variant: "dark", children: "New", showIcon: false },
    { variant: "warning", children: "Limited", showIcon: true },
    { variant: "brown", children: "Top", showIcon: false },
    { variant: "light", children: "Bestseller", showIcon: false },
  ],
};
