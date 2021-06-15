import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser="";
  details:any={
    
    1000: { uid: 1000,  username: "userone", password: "userone" },
    1001: { uid: 1001,  username: "usertwo", password: "usertwo" },
    1002: {uid: 1002,  username: "userthree", password: "userthree" },
    1003: { uid: 1003,  username: "userfour", password: "userfour" }
  

}
  constructor() {
    this.getDetails();
   }
  saveDetails(){
localStorage.setItem("accountDetails",JSON.stringify(this.details));
if(this.currentUser){
  localStorage.setItem("currentUser",JSON.stringify(this.currentUser));

}



  }
  getDetails(){
    if(localStorage.getItem("accountDetails")){
    this.details=JSON.parse(localStorage.getItem("accountDetails")|| '')
  }

    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")|| '')
    }
    
  }

register(uid:any,uname:any,pswd:any){

  let user=this.details
  if(uid in user ){
    return false;
    
  }
  else{
  user[uid]={
    uid,
    username:uname,
    password:pswd
  }
  this.saveDetails();
  return true;
 
}

}
login(uid:any,uname:any,pswd:any)
{
  let users=this.details;
  if(uid in users){
    if(pswd== users[uid]["password"]){
this.currentUser=users[uid]["username"]
this.saveDetails();
      return true;
     
    }
    else{
      alert("incorrect password");
      return false;
    }
  }
  else{
    alert("invalid account")
    return false;
  }
}
createevent(date:any,event:any)
{
  let user=this.details;
  if (date in user)
  {
    
  
    return user[date][event]
  }
  this.saveDetails();
  
  return true;
  
}

}



