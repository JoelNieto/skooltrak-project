import { Attribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type Theme = 'primary' | 'secondary' | 'success' | 'danger';
export type Variant = 'default' | 'outline' | 'clear';
export type Size = 'md' | 'lg' | 'sm';
@Component({
  selector: 'skooltrak-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() loading: boolean | null = false;
  @Input() disabled = false;

  constructor(
    @Attribute('theme') public theme: Theme = 'primary',
    @Attribute('variant') public variant: Variant = 'default',
    @Attribute('size') public size: Size = 'md',
    @Attribute('type') public type: 'button' | 'submit' = 'button'
  ) {
    this.theme = theme ?? 'primary';
    this.variant = variant ?? 'default';
    this.size = size ?? 'md';
    this.type = type ?? 'button';
  }
}
