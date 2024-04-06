import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { DOCUMENT } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {
  form!: FormGroup;
  submitted: boolean = false;
  localStorage;
  constructor(private fb: FormBuilder,
    private router: Router,
    public loginService: LoginService,
    private messageService: MessageService,
    @Inject(DOCUMENT) private document: Document) {
    this.localStorage = document.defaultView?.localStorage;
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true
    if (!this.form.valid) {
      return
    }
    this.loginService.login(this.form.value)
      .subscribe(
        response => {
          console.log(response);
          if (response && response.token) {
            this.router.navigate(['pages/home']);
            localStorage.setItem('token', `JWT ${response.token}`);
          }
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Cred' });

        });
  }

  get formControls() {
    return this.form.controls
  }
}
