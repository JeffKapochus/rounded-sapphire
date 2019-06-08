import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = "User";
  httpService;
  user_id;
  submissions;

  constructor(private http: Http,private route: ActivatedRoute) {
    this.httpService = http;
   }

   ngOnInit() {
    this.user_id = this.route.snapshot.paramMap.get('id');
    this.getUser();
    this.getSubmissions();
  }

  getUser(){
    this.httpService.get('http://localhost:3000/users/' + this.user_id)
    .subscribe(rest => this.user = rest.json());
  }

  getSubmissions(){
    this.httpService.get('http://localhost:3000/submissions/user/' + this.user_id)
    .subscribe(rest => this.submissions = rest.json());
  }

}
