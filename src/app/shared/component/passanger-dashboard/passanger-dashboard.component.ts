import { Component, OnInit } from '@angular/core';
import { passangerService } from '../../service/passanger.service';
import { Ipassanger } from '../../model/passanger';

@Component({
  selector: 'app-passanger-dashboard',
  templateUrl: './passanger-dashboard.component.html',
  styleUrls: ['./passanger-dashboard.component.scss']
})
export class PassangerDashboardComponent implements OnInit {
   passangerInstance!:passangerService
   passangerArray : Ipassanger[]=[]
   
  constructor(private_passangerService:passangerService) { }

  ngOnInit(): void {
    this.passangerInstance=new passangerService()
    console.log(this.passangerInstance.passangerArray);
    this.passangerArray=this.passangerInstance.passangerArray
    
  }

}
