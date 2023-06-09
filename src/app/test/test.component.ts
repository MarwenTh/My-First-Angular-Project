import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  T = "tester le code"
  img = "www.google.com"
  link = "www.reddit.com"
  x = "red"
  y = "color: yellow; font-size: 50px"
  z = "none"
  greet(){
    alert ("yo")
  }
  o = "border-radius: 5px; background-color: blue; color: white; border: none; padding:20px 30px 20px 30px; margin-left: 50px;"
  agrandir(){
    this.x = "color: purple; font-size: 100px"
  }
  small(){
    this.x = "color: orange; font-size: 50px;"
  }
}
