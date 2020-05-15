import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.minLength(10),
      Validators.maxLength(10), Validators.pattern('[6-9]{1}[0-9]{9}')]),
    password: new FormControl('', [Validators.required,
      Validators.pattern('(?=^.{8,}$)(?=.*[A-Z])(?=.*[a-z]).*$')])
  });
  hide = true;
  message = '';
  constructor(private authserv: AuthService, private router: Router) { }
  ngOnInit(): void {
  }

  submit() {
    this.authserv.login(this.loginForm.value)
    .subscribe(data => {
      if (data.token != null) {
        localStorage.setItem('token', data.token);
        this.authserv.emitloggedin(true);
        this.authserv.emitadmin(data.admin);
        this.router.navigate(['']);
      }
      this.message = data.message;
    },
    err => {
      console.log(err);
      alert(err.message);
    }
    );
  }
}
