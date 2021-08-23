import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert: boolean = false;
  email!: string;
  password!: string;
  
  
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logIn(){
    if(this.email=="admin@gmail.com" && this.password=="12345"){
      this.router.navigate(['../portfolio']);
      
    }
    else{
      alert("please enter valid credentials");
    }
  }

}
