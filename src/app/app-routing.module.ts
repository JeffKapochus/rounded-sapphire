import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubmissionComponent } from './submission/submission.component'
import { SubmissionListComponent } from './submission-list/submission-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'submissions' , component: SubmissionListComponent },
  { path: 'submission/:id' , component: SubmissionComponent },
  { path: 'user/:id' , component: UserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

