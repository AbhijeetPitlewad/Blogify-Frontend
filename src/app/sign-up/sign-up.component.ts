import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';
// import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // Reactive Form 
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { 
    this.registerForm= formBuilder.group({
        name: ["", [Validators.required]],
        age: new FormControl(),
        email: ["", [Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6) ]],
        confirmPassowrd:  ["", [Validators.required]]

    })
  }

  ngOnInit(): void {
  }

  isFormInValid(){
    if( this.registerForm.invalid || this.registerForm.value.password != this.registerForm.value.confirmPassowrd ){
      return true;
    }else{
      return false;
    }
  }

  createUser(){


    console.log(this.registerForm.value);
    // console.log(this.registerForm);

    this.userService.createUser(this.registerForm.value).subscribe(data =>{
      console.log(data);
      this.registerForm.reset();
    })
  }

}
