import { Meta, StoryFn } from "@storybook/react";
import List, { ListProps, ListItem } from "./List";

export default {
  title: "Components/Text content components/List",
  component: List,
  argTypes: {
    ordered: {
      control: "boolean",
      description: "ordered or unordered",
      defaultValue: false,
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "ordered or unordered",
      defaultValue: "medium",
    },
    item1: {
      control: "text",
      description: "First list item",
      defaultValue:
        "Regularly clean your guitar with a soft cloth to maintain its finish.",
    },
    item2: {
      control: "text",
      description: "Second list item",
      defaultValue:
        "Keep your guitar in a stable environment to prevent damage.",
    },
    item3: {
      control: "text",
      description: "Third list item",
      defaultValue:
        "Change your strings regularly to ensure optimal sound quality.",
    },
    item4: {
      control: "text",
      description: "Fourth list item",
      defaultValue:
        "Store your guitar in a case or on a stand to protect it from physical damage.",
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: StoryFn<
  ListProps & { item1: string; item2: string; item3: string; item4: string }
> = ({ item1, item2, item3, item4, ...args }) => (
  <List {...args}>
    <ListItem>{item1}</ListItem>
    <ListItem>{item2}</ListItem>
    <ListItem>{item3}</ListItem>
    <ListItem>{item4}</ListItem>
  </List>
);

export const UnorderedListMedium = Template.bind({});
UnorderedListMedium.args = {
  ordered: false,
  size: "medium",
  item1:
    "Regularly clean your guitar with a soft cloth to maintain its finish.",
  item2: "Keep your guitar in a stable environment to prevent damage.",
  item3: "Change your strings regularly to ensure optimal sound quality.",
  item4:
    "Store your guitar in a case or on a stand to protect it from physical damage.",
};

export const OrderedListMedium = Template.bind({});
OrderedListMedium.args = {
  ordered: true,
  size: "medium",
  item1:
    "Regularly clean your guitar with a soft cloth to maintain its finish.",
  item2: "Keep your guitar in a stable environment to prevent damage.",
  item3: "Change your strings regularly to ensure optimal sound quality.",
  item4:
    "Store your guitar in a case or on a stand to protect it from physical damage.",
};
