import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CommitListComponent } from './commit-list/commit-list.component';
import { CommitDetailComponent } from './commit-detail/commit-detail.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CommitListComponent,
    CommitDetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
  ],
  entryComponents: [
    CommitDetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
