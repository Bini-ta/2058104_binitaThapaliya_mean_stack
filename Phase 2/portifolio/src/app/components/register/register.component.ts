import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  alert: boolean = false;

  createUser = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private resto: CommonServiceService) { }

  ngOnInit(): void {
  }

  regUser(){
    this.resto.createUser(this.createUser.value).subscribe((result) => {
      console.log(result, "data registered successfully")
    })
  }

}
