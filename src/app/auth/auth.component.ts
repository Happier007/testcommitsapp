import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public authForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.authForm = fb.group({
      name: [null, Validators.required],
      repository: [null, Validators.required]
    });
  }

  onSubmit() {
    localStorage.setItem('loginSource', JSON.stringify(this.authForm.value))
    this.router.navigateByUrl('/commits');
  }
}
