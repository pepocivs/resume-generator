import { Component, Input } from '@angular/core';

@Component({
  selector: 'resume-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent {
  @Input() timeLineArray: any[];
}