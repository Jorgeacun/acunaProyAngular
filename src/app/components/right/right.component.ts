import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  estado: boolean
    = false;
    estadoPais: boolean  = false;
  constructor() { }

  ngOnInit(): void {
  }

}
