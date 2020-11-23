import { Component, OnInit, Input } from '@angular/core';
import { MiservicioService } from 'src/app/services/miservicio.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  list: any = [];
  @Input() estadop: boolean = false;
  constructor(public miservicio: MiservicioService) { 
    this.loadposts();
  }

  loadposts() {
    return this.miservicio.getPais().subscribe(data => {
      this.list = data;
    });
  }
  ngOnInit(): void {
  }

}
