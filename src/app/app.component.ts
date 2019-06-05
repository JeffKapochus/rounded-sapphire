import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private http: Http){
    http.get('http://localhost:3000/submissions')
    .subscribe(rest => this.submissions = rest.json());
  }

  onClickMe(){
    document.getElementById("navbar").classList.toggle("unexpanded");
    document.getElementById("navbar").classList.toggle("expanded");
  }
}
