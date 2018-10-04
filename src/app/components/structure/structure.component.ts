import { Component, Input } from '@angular/core';

@Component({
  selector: 'resume-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})

export class StructureComponent {
  @Input() legend: string;
}