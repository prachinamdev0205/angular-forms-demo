import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image:any ="assets/images/download.jpg";

  display(){
    this.image="assets/images/download.jpg";
  }
  display1(){
    this.image="assets/images/dl1.jpg";
  }
  display2(){
    this.image="assets/images/dl2.png";
  }
  display3(){
    this.image="assets/images/dl3.jpg";
  }

  constructor() { }

  ngOnInit() {
  }

}
