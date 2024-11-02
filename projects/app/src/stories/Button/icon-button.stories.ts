import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Button/IconButton',
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [MatButtonModule, MatIcon] })],
};

export default meta;
type Story = StoryObj<MatIconButton>;

export const Icon: Story = {
  args: {
    ariaDisabled: false,
    disableRipple: false,
    disabled: false,
    disabledInteractive: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <button mat-icon-button [aria-disabled]="ariaDisabled" [disabled]="disabled" [disableRipple]="disableRipple" [disabledInteractive]="disabledInteractive" [extended]="extended"><mat-icon fontIcon="edit" /></button>
    `,
  }),
};
