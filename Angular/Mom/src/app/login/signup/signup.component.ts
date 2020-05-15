import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // signupForm = new FormGroup({
  //   phone: new FormControl('', [Validators.required, Validators.minLength(10),
  //     Validators.maxLength(10), Validators.pattern('[6-9]{1}[0-9]{9}')]),
  //   password: new FormControl('', [Validators.required,
  //     Validators.pattern('(?=^.{8,}$)(?=.*[A-Z])(?=.*[a-z]).*$')])
  // });
  signupForm: FormGroup;
  hide = true;
  message = '';
  constructor(private authserv: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          phone: ['', [Validators.required, Validators.minLength(10),
            Validators.maxLength(10), Validators.pattern('[6-9]{1}[0-9]{9}')]]
        }),
        this.formBuilder.group({
          password: ['', [Validators.required,
            Validators.pattern('(?=^.{8,}$)(?=.*[A-Z])(?=.*[a-z]).*$')]]
        }),
        this.formBuilder.group({
          fname: ['', [Validators.required]]
        }),
        this.formBuilder.group({
          lname: ['', [Validators.required]]
        }),
        this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]]
        }),
        this.formBuilder.group({
          age: ['', [Validators.required]]
        })
      ])
    });
  }

  get formArray(): AbstractControl | null { return this.signupForm.get('formArray'); }

  submit() {
    const formdata = {
      phone : this.signupForm.value.formArray[0].phone,
      password : this.signupForm.value.formArray[1].password,
      fname :  this.signupForm.value.formArray[2].fname,
      lname : this.signupForm.value.formArray[3].lname,
      email: this.signupForm.value.formArray[4].email,
      age : this.signupForm.value.formArray[5].age
    };
    this.authserv.signup(formdata)
    .subscribe(data => {
      if (data.result === true) { this.router.navigate(['login']); }
      alert('Some Error occured please try again');
      this.signupForm.reset();
    },
    err => {
      console.log(err);
      alert('Internal server Error');
    }
    );
  }

}
