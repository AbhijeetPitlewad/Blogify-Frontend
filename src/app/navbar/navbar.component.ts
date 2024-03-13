import { Component, OnInit } from '@angular/core';
import { AuthenticateUserLoginService } from '../authenticate-user-login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  currenUserName: any;
  currentUserId: string="";


  constructor(private userService: UserService, private authenticateUserLoginService: AuthenticateUserLoginService) {
    // this.loggedIn = sessionStorage.getItem("loggedIn") === "true" ? true: false;
    // this.currentUserId = sessionStorage.getItem("currentUserId");
    // this.authenticateUserLoginService.getCurrentUserId();
    this.loggedIn = this.authenticateUserLoginService.getCurrentUserId().loggedIn;
    this.currentUserId = this.authenticateUserLoginService.getCurrentUserId();
    this.currenUserName = "";

    console.log("constructor--"+ this.currentUserId);

  }



  ngOnInit(): void {

    if (this.currentUserId != "") {
      // this.currentUser= JSON.parse(this.currentUser);

      this.userService.getUser(this.currentUserId).subscribe(data => {
        this.currenUserName = data.user.name;
        console.log(this.currenUserName);
        console.log(this.currentUserId);
        this.loggedIn=true;
      })
    } else {
      this.loggedIn = false;
    }


    // console.log(this.loggedIn)
    // console.log(this.currentUser);

  }


}
