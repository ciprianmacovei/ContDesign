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
        if (self.navBarStatus.collision($('.fixed-nav'),$('.moving'))) {
          self.navBarStatus.setColapseStatus(true);
        }
        else self.navBarStatus.setColapseStatus(false);
      });
    });
  }
}
