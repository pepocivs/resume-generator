import { Component, Input } from '@angular/core';

@Component({
  selector: 'half-column-block',
  templateUrl: './half-column-block.component.html',
  styleUrls: ['./half-column-block.component.scss']
})

export class HalfColumnBlockComponent {
  @Input() info: object;
  @Input() title: string;
}
