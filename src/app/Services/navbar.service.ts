import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public colapse = new Subject<Boolean>();

  constructor() { }

  setColapseStatus(status:boolean) {
    this.colapse.next(status);
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
