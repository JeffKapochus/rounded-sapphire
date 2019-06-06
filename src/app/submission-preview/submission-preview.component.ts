import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submission-preview',
  templateUrl: './submission-preview.component.html',
  styleUrls: ['./submission-preview.component.css']
})
export class SubmissionPreviewComponent {

  @Input() title :string;
  @Input() description :string;
  @Input() submitter :string; 
  @Input() id :number;
  private _submitTime = '';

  @Input() set submitTime(submitTime :string){
    var year = submitTime.substring(0,4);
    var month = submitTime.substring(5,7);
    var day = submitTime.substring(8,10); 
    this._submitTime = day + "-" + month + "-" + year;
  }

  get submitTime() :string { return this._submitTime; }

}
