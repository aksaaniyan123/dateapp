import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
edate="";

event="";
user=this.dataService.currentUser;

  constructor(private dataService:DataService) { }
  
  ngOnInit(): void {
  }



  createevent()
  {
  var date=this.edate;
 
  var event=this.event;
  const result=this.dataService.createevent(date,event)
  if (result){
    alert("Event which named"  +  event  +  "on"  +  date  + "added to event list")
  }
  } 
}
