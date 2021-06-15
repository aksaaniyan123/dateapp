import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
uid="";
uname="";
pswd="";
  constructor(private dataService:DataService, private router:Router ) { }

  ngOnInit(): void {
  }
register(){
  
  var uid=this.uid;
  var uname=this.uname;
  var pswd=this.pswd;
  const result=this.dataService.register(uid,uname,pswd)
  if (result)
  {
    alert("register successfull");
    this.router.navigateByUrl("");
  }
  else{
    alert("user exist plz login")
  }
}
}
