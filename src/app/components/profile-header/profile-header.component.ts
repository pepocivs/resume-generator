import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})

export class ProfileHeaderComponent {
  @Input() hello: string;
  @Input() data: object;
}
