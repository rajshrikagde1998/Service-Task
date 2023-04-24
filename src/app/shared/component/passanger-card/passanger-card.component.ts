import { Component, Input, OnInit } from '@angular/core';
import { Ipassanger } from '../../model/passanger';


@Component({
  selector: 'app-passanger-card',
  templateUrl: './passanger-card.component.html',
  styleUrls: ['./passanger-card.component.scss']
})
export class PassangerCardComponent implements OnInit {
   @Input()
    
  passObj!: Ipassanger; 
  prperty : any;
  obj!:any[]
i: any;
  constructor() { }
 
  ngOnInit(): void {
    
  }
 
  dateChecked(){
    if(this.passObj.checkInDate===null){
     return "Not checked in"
    }else{
      return new Date(this.passObj.checkInDate)
    }
  }

  childrenCheck(){
    if(this.passObj.children===null){
      return 0
    }{
      return this.passObj.children.length
    }
  }
  
 
}


