import { Component, OnInit } from '@angular/core';
import { Qoutes } from '../qoutes';
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  qoutes:Qoutes[] = [
    new Qoutes(1,'trigga', 'Once you choose hope, anything’s possible.',new Date(2014,5,2),0,0,'mukhtar'),
    new Qoutes(2,'ahmed', 'I want to be the reason you look at your phone when you wake up in the morning and smile', new Date(2016,6,3),0,0,'james'),
    new Qoutes(3,'david', 'I call her Google, Because she got everything I am searcing for.', new Date(2018,10,5),0,0,'Abdirahman'),
  ];
  toggleDetails(index){
    this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
  }
  deleteQoute(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.qoutes[index].submited_by}?`)

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
