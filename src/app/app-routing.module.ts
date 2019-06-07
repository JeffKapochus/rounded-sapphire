import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubmissionComponent } from './submission/submission.component'
import { SubmissionListComponent } from './submission-list/submission-list.component';

const routes: Routes = [
  { path: 'submissions' , component: SubmissionListComponent },
  { path: 'submission/:id' , component: SubmissionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

