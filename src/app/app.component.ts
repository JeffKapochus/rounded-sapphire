import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { SubmissionPreviewComponent } from './submission-preview/submission-preview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rounded Sapphire';
  currentYear = new Date().getFullYear();
  submissions;
  faBars = faBars;

  constructor(){
  }

  onClickMe(){
    document.getElementById("navbar").classList.toggle("unexpanded");
    document.getElementById("navbar").classList.toggle("expanded");
  }
}
