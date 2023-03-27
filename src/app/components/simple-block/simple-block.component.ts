import { Component, Input } from '@angular/core';

@Component({
  selector: 'simple-block',
  templateUrl: './simple-block.component.html',
  styleUrls: ['./simple-block.component.scss']
})

export class SimpleBlockComponent {
  @Input() info: object;
  @Input() title: string;
  @Input() color: string;
  @Input() fontSize: string;
  @Input() reverse: Boolean;
  @Input() noTitle: Boolean;
}
