import { Component, Input } from '@angular/core';

@Component({
  selector: 'art-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})

export class ArtStructureComponent {
  @Input() legend: string;
}