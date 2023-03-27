import { Component, Input } from '@angular/core';

@Component({
  selector: 'structure-lite',
  templateUrl: './structureLite.component.html',
  styleUrls: ['./structureLite.component.scss']
})

export class StructureLiteComponent {
  @Input() legend: string;
}