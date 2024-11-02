import { MatButtonModule, MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Button/MiniFabButton',
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [MatButtonModule, MatIconModule] })],
};

export default meta;
type Story = StoryObj<MatMiniFabButton>;

export const MiniFab: Story = {
  args: {
    ariaDisabled: false,
    disableRipple: false,
    disabled: false,
    disabledInteractive: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <button mat-mini-fab [aria-disabled]="ariaDisabled" [disabled]="disabled" [disableRipple]="disableRipple" [disabledInteractive]="disabledInteractive"><mat-icon fontIcon="edit" /></button>
    `,
  }),
};
