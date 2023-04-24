import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passanger-count',
  templateUrl: './passanger-count.component.html',
  styleUrls: ['./passanger-count.component.scss']
})
export class PassangerCountComponent implements OnInit {
passangerArray: any;

  constructor() { }

  ngOnInit(): void {
  }

}
