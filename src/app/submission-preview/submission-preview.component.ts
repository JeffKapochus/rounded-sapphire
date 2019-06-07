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
  @Input() submitTime :Date;

}
