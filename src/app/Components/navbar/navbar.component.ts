import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {NavbarService} from "../../Services/navbar.service";

import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {

  nabBarSubscription:Subscription;

  constructor(private navBarStatus:NavbarService) { }

  ngOnInit() {

    this.nabBarSubscription = this.navBarStatus.colapse.subscribe( (res:Boolean) => {
      if (res) {
        $('.navbar').removeClass('bg-dark').removeClass('navbar-dark').addClass('bg-light').addClass('navbar-light');
      } else {
        $('.navbar').removeClass('bg-light').removeClass('navbar-light').addClass('bg-dark').addClass('navbar-dark');
      }
    });
  }

  ngOnDestroy(): void {
    this.nabBarSubscription.unsubscribe();
  }



}
