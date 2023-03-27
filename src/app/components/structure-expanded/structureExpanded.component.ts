import { Component, Input } from '@angular/core';

@Component({
  selector: 'structure-expanded',
  templateUrl: './structureExpanded.component.html',
  styleUrls: ['./structureExpanded.component.scss']
})

export class StructureExpandedComponent {
  @Input() legend: string;
}