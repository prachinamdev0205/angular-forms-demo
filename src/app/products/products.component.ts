import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  image:any ="assets/images/download.jpg";
  url:any ="https://www.google.com";
  data:string ="rubbish text";
  txt:string ="Google";
  
  display(){
    this.txt="youtube";
    this.url="https://www.youtube.com"
  }
  constructor() { }

  ngOnInit() {
  }

}
