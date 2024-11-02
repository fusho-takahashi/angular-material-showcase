import { MatButton, MatButtonModule } from '@angular/material/button';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Button/Button',
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [MatButtonModule] })],
};

export default meta;
type Story = StoryObj<MatButton>;

export const Basic: Story = {
  args: {
    ariaDisabled: false,
    disableRipple: false,
    disabled: false,
    disabledInteractive: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <button mat-button [aria-disabled]="ariaDisabled" [disabled]="disabled" [disableRipple]="disableRipple" [disabledInteractive]="disabledInteractive">Click me</button>
    `,
  }),
};

export const Raised: Story = {
  args: {
    ariaDisabled: false,
    disableRipple: false,
    disabled: false,
    disabledInteractive: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <button mat-raised-button [aria-disabled]="ariaDisabled"[disabled]="disabled" [disableRipple]="disableRipple" [disabledInteractive]="disabledInteractive">Click me</button>
    `,
  }),
};

export const Flat: Story = {
  args: {
    ariaDisabled: false,
    disableRipple: false,
    disabled: false,
    disabledInteractive: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <button mat-flat-button [aria-disabled]="ariaDisabled"[disabled]="disabled" [disableRipple]="disableRipple" [disabledInteractive]="disabledInteractive">Click me</button>
    `,
  }),
};

export const Stroked: Story = {
  args: {
    ariaDisabled: false,
    disableRipple: false,
    disabled: false,
    disabledInteractive: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <button mat-stroked-button [aria-disabled]="ariaDisabled"[disabled]="disabled" [disableRipple]="disableRipple" [disabledInteractive]="disabledInteractive">Click me</button>
    `,
  }),
};
