import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MyserviceService } from '../myservice.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup
  successMessage = ''
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      role: new FormControl(null)
    })
   }

  ngOnInit(): void {
  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched
  }

  register() {
    console.log(this.myForm.value)
    this._myservice.submitRegister(this.myForm.value)
    .subscribe(
      data => this.successMessage = 'Registration Success',
      error => this.successMessage = 'Some error'
    )
  }

  moveToLogin() {
    this._router.navigate(['../login'], {relativeTo: this._activatedRoute})
  }
}
