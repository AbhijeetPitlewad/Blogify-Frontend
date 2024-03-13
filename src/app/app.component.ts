import { Component } from '@angular/core';
import { OnInit, DoCheck } from '@angular/core';
import { UserService } from './user.service';
import { AuthenticateUserLoginService } from './authenticate-user-login.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Blogify-Frontend';

  constructor(){}

  ngOnInit(): void {      
  }


}
