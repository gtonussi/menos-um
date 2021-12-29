import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "../../components/Button";

export default {
  title: "Menos-Um/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Hello world</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variation: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variation: "secondary",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};
