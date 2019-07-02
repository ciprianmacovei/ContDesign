import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../Services/navbar.service";



import * as $ from 'jquery';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private navBarStatus:NavbarService) { }

  ngOnInit() {
    const self = this;
    $(document).ready(function(){
      $(window).scroll(function() {
        if (self.collision($('.fixed-nav'),$('.moving'))) {
          self.navBarStatus.setColapseStatus(true);
        }
        else self.navBarStatus.setColapseStatus(false);
      });
    });
  }

  collision($fixed, $moving) {
    let y1 = $(window).scrollTop() - $fixed.offset().top,
      h1 = $('nav').outerHeight(true),
      y2 = $moving.offset().top,
      h2 = $moving.outerHeight(true);
    if (y1+h1>y2 && y1<y2+h2 ) return true;
    return false;
  }


}
