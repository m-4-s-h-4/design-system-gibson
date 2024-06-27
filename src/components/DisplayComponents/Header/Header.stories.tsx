import { Meta, StoryFn } from "@storybook/react";
import Header from "./Header";

const meta: Meta = {
  title: "Components/Display Components/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
