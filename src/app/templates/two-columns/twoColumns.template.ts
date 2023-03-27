import { Component, Input } from '@angular/core';

@Component({
  selector: 'two-columns-template',
  templateUrl: './twoColumns.template.html',
  styleUrls: ['./twoColumns.template.scss']
})

export class TwoColumnsTemplate {
  @Input() resumeData: object;
};
