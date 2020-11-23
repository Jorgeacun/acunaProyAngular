import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../../services/miservicio.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  list: any = [];
  constructor(public miservicio: MiservicioService) {
    this.loadposts();
   }
   loadposts() {
    return this.miservicio.getjsonplaceholder().subscribe(data => {
      this.list = data;
    });
  }
 
  ngOnInit(): void {
  }

}
