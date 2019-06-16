import { Component } from '@angular/core';

import resumeData from './data/my-resume.sergio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  resumeData = resumeData;
}
