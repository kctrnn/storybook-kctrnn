import React from "react";

import Button from "./index";

export default {
  title: "kctrnn/Button",
  component: Button,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: {
    disabled: false,
    disableShadow: false,
    size: "medium",
    color: "default",
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  color: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Danger",
  color: "danger",
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Outline",
  variant: "outline",
};

export const Text = Template.bind({});
Text.args = {
  label: "Text",
  variant: "text",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Medium",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
};
