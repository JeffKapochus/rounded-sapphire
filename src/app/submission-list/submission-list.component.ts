import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { SubmissionPreviewComponent } from './submission-preview/submission-preview.component';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {

  submissions;

  constructor(private http: Http){
    http.get('http://localhost:3000/submissions')
    .subscribe(rest => this.submissions = rest.json());
  }

  ngOnInit() {
  }

}
