import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitListComponent } from './commit-list/commit-list.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'commits', component: CommitListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
