import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-header-two-columns',
  templateUrl: './profileHeaderTwoColumns.component.html',
  styleUrls: ['./profileHeaderTwoColumns.component.scss']
})

export class ProfileHeaderTwoColumnsComponent {
  @Input() data: object;
  @Input() color: string;
}
