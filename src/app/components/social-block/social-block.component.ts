import { Component, Input } from '@angular/core';

@Component({
  selector: 'social-block',
  templateUrl: './social-block.component.html',
  styleUrls: ['./social-block.component.scss']
})

export class SocialBlockComponent {
  @Input() background: object;
}
