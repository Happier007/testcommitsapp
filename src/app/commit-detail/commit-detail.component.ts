import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-commit-detail',
  templateUrl: './commit-detail.component.html',
  styleUrls: ['./commit-detail.component.css'],
})
export class CommitDetailComponent{

  public commit: Object;
 
  constructor(public bsModalRef: BsModalRef) {}
}