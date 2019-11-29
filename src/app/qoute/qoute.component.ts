import { Component, OnInit } from '@angular/core';
import { Qoutes } from '../qoutes';
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  qoutes:Qoutes[] = [
    new Qoutes(1,'Once you choose hope, anything’s possible.','Ahmed', new Date(2019,12,1)),
    new Qoutes(2,'I want to be the reason you look at your phone when you wake up in the morning and smile','Mukhtar', new Date(2019,12,3)),
    new Qoutes(3,'I call her Google, Because she got everything I am searcing for.','Abdirahman', new Date(2019,12,5)),
  ];
  toggleDetails(index){
    this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
  }
  completeQoute(isComplete, index){
    if (isComplete) {
      this.qoutes.splice(index,1);
    }
  }
  constructor() {}

  ngOnInit() {
  }

}
