import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Button/FabButton',
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [MatButtonModule, MatIcon] })],
};

export default meta;
type Story = StoryObj<MatFabButton>;

export const FAB: Story = {
  args: {
    ariaDisabled: false,
    disableRipple: false,
    disabled: false,
    disabledInteractive: false,
    extended: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <button mat-fab [aria-disabled]="ariaDisabled" [disabled]="disabled" [disableRipple]="disableRipple" [disabledInteractive]="disabledInteractive" [extended]="extended"><mat-icon fontIcon="edit" />@if(extended){Edit}</button>
    `,
  }),
};
