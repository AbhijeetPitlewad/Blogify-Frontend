import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  currenUserId = sessionStorage.getItem("currenUserId");
  updateUserForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {

    this.updateUserForm = formBuilder.group({
      name: ["", [Validators.required]],
      age: new FormControl(),
      email: ["", [Validators.required]]
    })
  }


  ngOnInit(): void {
    this.userService.getUser(this.currenUserId).subscribe(data => {
      this.updateUserForm.setValue( data.user);
    })
  }

  isFormInValid(){
    if( this.updateUserForm.invalid){
      return true;
    }else{
      return false;
    }
  }

  updateUser() {
    console.log(this.currenUserId);
    console.log(this.updateUserForm.value);
    this.userService.updateUser(this.currenUserId, this.updateUserForm.value).subscribe(data => {
      this.updateUserForm.setValue( data.user);
    })
  }

}

