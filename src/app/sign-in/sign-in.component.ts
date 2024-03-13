import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, NgForm, NgModel } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthenticateUserLoginService } from '../authenticate-user-login.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

// interface LoginDetail{
//   currentUserId: string,
//   loggedIn: boolean
// }

export class SignInComponent implements OnInit {

  // Template Driven Form

  @Output()
  logInEmitter= new EventEmitter();

  isInvalid = false;
  // signIn:any;
  constructor(private userService: UserService, private router: Router, private authenticateUserLoginService: AuthenticateUserLoginService) {
    this.isInvalid = false;
   }

  ngOnInit(): void {    
  }

  logIn(signIn: NgForm) {
    // console.log(signIn);
    console.log(signIn.value);
    console.log(signIn.valid);


    this.userService.logInUser(signIn.value).subscribe(data => {
      console.log(data);
      let currentUserId = data.user._id;
      this.isInvalid = false;

      let logInUser=this.authenticateUserLoginService.setCurrentUserId(currentUserId, true);
      this.logInEmitter.emit(logInUser);

      console.log("temp->")
        console.log(logInUser)

      // sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
      // sessionStorage.setItem('currenUserId', currentUser._id);
      // sessionStorage.setItem('loggedIn', "true");

      // console.log(sessionStorage.getItem("currentUser"))
      // console.log(sessionStorage.getItem("loggedIn"))
      // console.log(sessionStorage.getItem("currenUserId"))

      signIn.reset();

      this.router.navigate(['/home']);

    },
      error => {
        console.log(error);
        console.log(error.error.Error);
        console.log(error.status);

        if (error.status == 401) {
          this.isInvalid = true;
        }

        let logInUser=this.authenticateUserLoginService.setCurrentUserId("", false);
        this.logInEmitter.emit(logInUser);
      }
    );


  }



}
