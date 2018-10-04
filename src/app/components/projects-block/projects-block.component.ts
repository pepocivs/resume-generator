import { Component, Input } from '@angular/core';

@Component({
  selector: 'projects-block',
  templateUrl: './projects-block.component.html',
  styleUrls: ['./projects-block.component.scss']
})

export class ProjectsBlockComponent {
  @Input() title: string;
  @Input() projects: object;
}
