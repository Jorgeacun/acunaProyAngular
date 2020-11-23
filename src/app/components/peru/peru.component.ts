import { Component, OnInit, Input } from '@angular/core';
import { MiservicioService } from 'src/app/services/miservicio.service';

@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  styleUrls: ['./peru.component.css']
})
export class PeruComponent implements OnInit {
  list: any = [];
  @Input() estado: boolean = false;
  constructor(public miservicio: MiservicioService) {
    this.loadposts();
   }

  loadposts() {
    return this.miservicio.getPeru().subscribe(data => {
      this.list = data;
    });
  }
  ngOnInit(): void {
  }

}
