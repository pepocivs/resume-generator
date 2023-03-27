import { Component, Input } from '@angular/core';

@Component({
  selector: 'two-columns-bars',
  templateUrl: './twoColumnsBars.component.html',
  styleUrls: ['./twoColumnsBars.component.scss']
})

export class TwoColumnsBarsComponent {
  @Input() info: object;
  @Input() percent: boolean;
  @Input() title: string;
}
