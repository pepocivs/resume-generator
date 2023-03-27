import { Component, Input } from '@angular/core';

@Component({
  selector: 'default-template',
  templateUrl: './default.template.html',
  styleUrls: []
})

export class DefaultTemplate {
  @Input() resumeData: object;
};
