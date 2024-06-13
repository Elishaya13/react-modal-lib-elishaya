import { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,

  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    styleIcon: 'check',
    onClose: () => {},
    title: 'Modal Title',
    message: 'Modal message here !',
    buttonMsg: 'Button',
    gapContent: 0,
  },
};

export const Simple: Story = {
  args: {
    isOpen: true,
    styleIcon: 'none',
    onClose: () => {},
    message: 'Simple modal !',
    buttonMsg: 'Close',
    btnBgColor: 'blue',
    btnTextColor: 'white',
    btnBorderRadius: '0px',
    modalBorderRadius: '0px',
  },
};

export const Custom: Story = {
  args: {
    isOpen: true,
    styleIcon: 'check',
    onClose: () => {},
    title: 'Success!',
    message: 'Element has been added successfully!',
    buttonMsg: 'Close',
    iconColor: 'green',
    btnTextColor: 'white',
    btnBgColor: '#5c469b',
  },
};

export const ErrorModal: Story = {
  args: {
    isOpen: true,
    styleIcon: 'error',
    iconColor: 'red',
    onClose: () => {},
    title: 'Error',
    message: 'An error has occurred !',
    buttonMsg: 'OK',
    btnBgColor: 'red',
    btnTextColor: 'white',
  },
};
