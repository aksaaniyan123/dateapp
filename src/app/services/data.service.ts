import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser="";
  currentUid="";
  details:any={
    
    1000: { uid: 1000,  username: "userone", password: "userone" ,eventDetails:[]},
    1001: { uid: 1001,  username: "usertwo", password: "usertwo" ,eventDetails:[]},
    1002: {uid: 1002,  username: "userthree", password: "userthree",eventDetails:[] },
    1003: { uid: 1003,  username: "userfour", password: "userfour",eventDetails:[] }
  

}
  constructor() {
    this.getDetails();
    
   }
  saveDetails(){
localStorage.setItem("accountDetails",JSON.stringify(this.details));
if(this.currentUser){
  localStorage.setItem("currentUser",JSON.stringify(this.currentUser));

}
if(this.currentUid){
  localStorage.setItem("currentUid",JSON.stringify(this.currentUid));

}



  }
  getDetails(){
    if(localStorage.getItem("accountDetails")){
    this.details=JSON.parse(localStorage.getItem("accountDetails")|| '')
  }

    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")|| '')
    }
    if(localStorage.getItem("currentUid")){
      this.currentUid=JSON.parse(localStorage.getItem("currentUid")|| '')
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
    password:pswd,
    eventDetails:[]
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
this.currentUid=uid;
console.log(this.currentUid);

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
createevent(edate:any,eventdetl:any)
{

if(this.currentUid){
  let user=this.details;
  console.log(user);
  
  let uid=this.currentUid;
  alert(uid)
  user[uid].eventDetails.push({edate:edate,eventdetl:eventdetl})
  this.saveDetails();
  return true;
}
else{
  return false;
}

}
display()
{
  if (this.currentUid){
    let users=this.details;
    console.log(users);
    
    let uid=this.currentUid;
    console.log(uid);
    
    return (users[uid].eventDetails)
  }
}
}



