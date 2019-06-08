import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubmissionComponent } from './submission/submission.component';
import { AppRoutingModule } from './app-routing.module';
import { SubmissionPreviewComponent } from './submission-preview/submission-preview.component';
import { SubmissionListComponent } from './submission-list/submission-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmissionComponent,
    SubmissionPreviewComponent,
    SubmissionListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
