import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  uid="enter your id pls";
  uname="";
  pswd="";


  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
login(){
  var uid= this.uid;
  var uname= this.uname;
  var pswd=this.pswd;
const result=this.dataService.login(uid,uname,pswd)
if(result){
  alert("login succesful")
     

  this.router.navigateByUrl("dashboard");
}
}
register(){
  this.router.navigateByUrl("register");
}


}
