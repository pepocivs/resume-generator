import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})

export class InfoBlockComponent {
  @Input() info: object;
  @Input() percent: boolean;
  @Input() title: string;
}
