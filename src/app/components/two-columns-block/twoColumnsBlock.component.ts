import { Component, Input } from '@angular/core';

@Component({
  selector: 'two-columns-block',
  templateUrl: './twoColumnsBlock.component.html',
  styleUrls: ['./twoColumnsBlock.component.scss']
})

export class TwoColumnsBlockComponent {
  @Input() info: object;
}
