import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})

export class TextBlockComponent {
  @Input() title: string;
  @Input() text: object;
  @Input() noTitle: Boolean;
}
