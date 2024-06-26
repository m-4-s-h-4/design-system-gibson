import { Meta, StoryFn } from "@storybook/react";
import List, { ListProps } from "./List";

export default {
  title: "Components/ Text content components/List",
  component: List,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["ordered", "unordered"],
      },
    },
    textStyle: {
      control: {
        type: "select",
        options: ["bodyLarge", "bodyMedium", "bodySmall"],
      },
    },
    items: {
      control: {
        type: "object",
      },
    },
    style: {
      control: false,
    },
  },
} as Meta<typeof List>;

const Template: StoryFn<ListProps> = (args) => <List {...args} />;

export const OrderedMedium = Template.bind({});
OrderedMedium.args = {
  type: "ordered",
  items: ["Les Paul Guitar", "SG Guitar", "Explorer Guitar"],
  textStyle: "bodyMedium",
};

export const UnorderedMedium = Template.bind({});
UnorderedMedium.args = {
  type: "unordered",
  items: ["Firebird Guitar", "Flying V Guitar", "ES-335 Guitar"],
  textStyle: "bodyMedium",
};
