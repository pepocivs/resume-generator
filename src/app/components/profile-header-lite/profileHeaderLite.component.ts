import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-header-lite',
  templateUrl: './profileHeaderLite.component.html',
  styleUrls: ['./profileHeaderLite.component.scss']
})

export class ProfileHeaderLiteComponent {
  @Input() data: object;
}
