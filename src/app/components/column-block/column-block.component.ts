import { Component, Input } from '@angular/core';

@Component({
  selector: 'column-block',
  templateUrl: './column-block.component.html',
  styleUrls: ['./column-block.component.scss']
})

export class ColumnBlockComponent {
  @Input() info: object;
  @Input() title: string;
}
