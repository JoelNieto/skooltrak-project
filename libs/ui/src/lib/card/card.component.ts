import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'skooltrak-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  shadow: string;
  constructor(
    @Attribute('shadow') shadow: 'none' | 'small' | 'normal' | 'large' = 'none'
  ) {
    switch (shadow) {
      case 'none':
        this.shadow = 'shadow-none';
        break;
      case 'small':
        this.shadow = 'shadow-sm';
        break;
      case 'normal':
        this.shadow = 'shadow';
        break;
      case 'large':
        this.shadow = 'shadow-lg';
        break;
      default:
        this.shadow = 'shadow-none';
        break;
    }
  }
}
