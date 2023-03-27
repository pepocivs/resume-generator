import { Component, Input } from '@angular/core';

@Component({
  selector: 'artistic-template',
  templateUrl: './artistic.template.html',
  styleUrls: []
})

export class ArtisticTemplate {
  @Input() resumeData: object;
};
