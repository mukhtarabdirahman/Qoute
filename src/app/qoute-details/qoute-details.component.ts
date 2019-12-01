import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Qoutes } from '../qoutes';
@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent implements OnInit {
  @Input() qoute: Qoutes;
  @Output() isComplete = new EventEmitter<boolean>();

  qouteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
