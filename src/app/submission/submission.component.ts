import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http } from '@angular/http';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  title = "Submission";
  submission;
  submission_id;
  httpService;

  constructor(private http: Http,private route: ActivatedRoute) {
    this.httpService = http;
   }

  ngOnInit() {
    this.submission_id = this.route.snapshot.paramMap.get('id');
    this.getSubmission();
  }

  getSubmission(){
    this.httpService.get('http://localhost:3000/submissions/' + this.submission_id)
    .subscribe(rest => this.submission = rest.json());
  }
}