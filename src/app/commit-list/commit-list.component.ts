import { Component } from '@angular/core';
import { GetCommitsService } from '../get-commits.service';
import { CommitDetailComponent } from '../commit-detail/commit-detail.component';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';


@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css'],
  providers: [GetCommitsService]
  
})
export class CommitListComponent {

  public user = JSON.parse(localStorage.getItem('loginSource'));
  public list$: Observable<Object> = this.getCommitsService.getData( this.user.name, this.user.repository );
  public page: number = 1;
  public countCommits: number = 10;
  public bsModalRef: BsModalRef;
  
  constructor(
    private getCommitsService: GetCommitsService, 
    private modalService: BsModalService,
    private location: Location
  ) { }

  public openModal( commit: any): void {
    const initialState = {
      commit: commit
    };
    this.bsModalRef = this.modalService.show(CommitDetailComponent, {initialState});
  }

  public pageChanged(event: any): void {
    this.page = event.page;
  }

  public goBack(): void {
    this.location.back();
  }

} 

 
