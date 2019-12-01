import { Component, OnInit } from '@angular/core';
import { Qoutes } from '../qoutes';
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  qoutes:Qoutes[] = [
    new Qoutes(1,'Once you choose hope, anything’s possible.','Ahmed', new Date()),
    new Qoutes(2,'I want to be the reason you look at your phone when you wake up in the morning and smile','Mukhtar', new Date()),
    new Qoutes(3,'I call her Google, Because she got everything I am searcing for.','Abdirahman', new Date()),
  ];
  toggleDetails(index){
    this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
  }
  deleteQoute(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.qoutes[index].name}?`)

      if (toDelete){
        this.qoutes.splice(index,1)
      }
    }
  }
  addNewQoutes(qoute){
        let qouteLength = this.qoutes.length;
        qoute.id = qouteLength+1;
        qoute.completeDate = new Date(qoute.completeDate)
        this.qoutes.push(qoute)
      }
  constructor() {}

  ngOnInit() {
  }

}
