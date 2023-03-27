import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashed-title',
  templateUrl: './dashedTitle.component.html',
  styleUrls: ['./dashedTitle.component.scss']
})

export class DashedTitleComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() color: string;
}
