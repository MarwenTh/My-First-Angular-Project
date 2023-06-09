import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  a = "Why Mixpanel"
  b = "Solutions"
  c = "Resources"
  d = "Pricing"
  e = "Contact Sales"
  f = "Log In"
  x = "Sign Up"
  
  //Style
  img = "assets/img/mixpanel.png"
  im = "assets/img/global-bold.png"
  // header = "display: flex; width: fit-content; margin: 0 auto; border: 1px solid whitesmoke; margin-top: 35px; padding: 35px 35px 25px 35px; border-radius: 20px; box-shadow: 1px 0px 11px 6px #403535; position: sticky; top: 20px; z-index: 999; background-color: rgb(31, 31, 36);"
  // container = "display: flex;"
  // right_container = "display: flex; "
  // log = "font-size: 18px; color: white; text-decoration: none; width: 60px; margin: 0 25px 0 25px;"
  // btn = "font-size: 18px; color: white; text-decoration: none;"
}
