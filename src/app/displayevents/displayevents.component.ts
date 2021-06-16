import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-displayevents',
  templateUrl: './displayevents.component.html',
  styleUrls: ['./displayevents.component.css']
})
export class DisplayeventsComponent implements OnInit {
results="";
  constructor(private service:DataService) {
    this.results=this.service.display();

   // this.userEvents=this.service.showEvents(localStorage.getItem(""))
   }

  ngOnInit(): void {
  }

}
