import React from 'react';
import Input from './index';

export default {
  title: 'kctrnn/Input',
  component: Input,

  argTypes: {},
};

export const Default = () => (
  <div style={{ padding: '50px' }}>
    <Input />
  </div>
);

export const Error = () => (
  <div style={{ padding: '50px' }}>
    <Input error />
  </div>
);

export const Disabled = () => (
  <div style={{ padding: '50px' }}>
    <Input disabled />
  </div>
);

export const Size = () => (
  <div style={{ padding: '50px' }}>
    <Input size='sm' />
    <Input size='md' />
  </div>
);

export const WithHelperText = () => (
  <div style={{ padding: '50px' }}>
    <Input helperText='Some interesting text' />
    <Input helperText='Some interesting text' error />
  </div>
);

export const WithDefaultValue = () => (
  <div style={{ padding: '50px' }}>
    <Input value='text' />
  </div>
);

export const FullWidth = () => (
  <div style={{ padding: '50px' }}>
    <Input fullWidth />
  </div>
);

export const Multiline = () => (
  <div style={{ padding: '50px' }}>
    <Input multiline row='4' />
  </div>
);

const Template = (args) => (
  <div style={{ padding: '50px' }}>
    <Input {...args} />
  </div>
);

export const Custom = Template.bind({});
Custom.args = {
  size: 'md',
  fullWidth: false,
  error: false,
  disabled: false,
  helperText: '',
  multiline: false,
  row: '',
  value: '',
};
