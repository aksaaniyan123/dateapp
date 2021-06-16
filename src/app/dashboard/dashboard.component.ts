import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
edate="";
eventdetl="";
user=this.dataService.currentUser;

  constructor(private dataService:DataService, private router :Router) { }
  
  ngOnInit(): void {
  }

  createevent()
  {
    
  var edate=this.edate;
 
  var eventdetl=this.eventdetl;
  const result=this.dataService.createevent(edate,eventdetl)
  if (result){
    alert("Event which named"  +  eventdetl  +  "on"  +  edate  + "added to event list")
  }
  } 
  displayall()
  {
    this.router.navigateByUrl("displayevents")
  }
}
