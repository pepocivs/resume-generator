import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-header-expanded',
  templateUrl: './profileHeaderExpanded.component.html',
  styleUrls: ['./profileHeaderExpanded.component.scss']
})

export class ProfileHeaderExpandedComponent {
  @Input() data: object;
}
