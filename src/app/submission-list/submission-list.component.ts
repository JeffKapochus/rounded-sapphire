import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

import { SubmissionPreviewComponent } from '../submission-preview/submission-preview.component';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {

  submissions;
  httpService;
  @Input() user_id? :number;

  constructor(private http: Http){
    this.httpService = http;
  }

  ngOnInit() {
    if(this.user_id == undefined){
      this.httpService.get('http://localhost:3000/submissions')
      .subscribe(rest => this.submissions = rest.json());
    }
    else{
      this.httpService.get('http://localhost:3000/submissions/user/' + this.user_id)
    .subscribe(rest => this.submissions = rest.json());
    }
  }

}
