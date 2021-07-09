import React from "react";

import Button from "./index";

export default {
  title: "kctrnn/Button",
  component: Button,

  argTypes: {},
};

export const Fill = () => (
  <div style={{ padding: "50px" }}>
    <Button variant='fill'>Default</Button>

    <Button variant='fill' color='primary'>
      Primary
    </Button>

    <Button variant='fill' color='secondary'>
      Secondary
    </Button>

    <Button variant='fill' color='danger'>
      Danger
    </Button>

    <Button variant='fill' disabled>
      Disabled
    </Button>
  </div>
);

export const Outline = () => (
  <div style={{ padding: "50px" }}>
    <Button variant='outline'>Default</Button>

    <Button variant='outline' color='primary'>
      Primary
    </Button>

    <Button variant='outline' color='secondary'>
      Secondary
    </Button>

    <Button variant='outline' color='danger'>
      Danger
    </Button>

    <Button variant='outline' disabled>
      Disabled
    </Button>
  </div>
);

export const Text = () => (
  <div style={{ padding: "50px" }}>
    <Button variant='text'>Default</Button>

    <Button variant='text' color='primary'>
      Primary
    </Button>

    <Button variant='text' color='secondary'>
      Secondary
    </Button>

    <Button variant='text' color='danger'>
      Danger
    </Button>

    <Button variant='text' disabled>
      Disabled
    </Button>
  </div>
);

export const Size = () => (
  <div style={{ padding: "50px" }}>
    <div>
      <Button variant='fill' color='primary' size='sm'>
        Small
      </Button>

      <Button variant='fill' color='primary'>
        Medium
      </Button>

      <Button variant='fill' color='primary' size='lg'>
        Large
      </Button>
    </div>

    <div>
      <Button variant='outline' color='danger' size='sm'>
        Small
      </Button>

      <Button variant='outline' color='danger'>
        Medium
      </Button>

      <Button variant='outline' color='danger' size='lg'>
        Large
      </Button>
    </div>

    <div>
      <Button variant='text' size='sm'>
        Small
      </Button>

      <Button variant='text'>Medium</Button>

      <Button variant='text' size='lg'>
        Large
      </Button>
    </div>
  </div>
);

export const disableShadow = () => (
  <div style={{ padding: "50px" }}>
    <Button color='primary' variant='fill' disableShadow>
      Disable Shadow
    </Button>
  </div>
);

const Template = (args) => <Button {...args}>{args.children}</Button>;
export const Custom = Template.bind({});
Custom.args = {
  variant: "fill",
  color: "secondary",
  size: "md",
  disableShadow: false,
  disabled: false,

  children: "Custom",
};
