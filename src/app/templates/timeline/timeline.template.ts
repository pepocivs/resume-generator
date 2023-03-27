import { Component, Input } from '@angular/core';

@Component({
  selector: 'timeline-template',
  templateUrl: './timeline.template.html',
  styleUrls: []
})

export class TimelineTemplate {
  @Input() resumeData: object;
};
