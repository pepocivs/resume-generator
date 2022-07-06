import { Component, Input } from '@angular/core';

@Component({
  selector: 'art-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})

export class ArtProfileHeaderComponent {
  @Input() hello: string;
  @Input() data: object;
}
