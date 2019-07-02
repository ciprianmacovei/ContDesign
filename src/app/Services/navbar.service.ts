import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public colapse = new Subject<Boolean>();

  constructor() { }

  setColapseStatus(status:boolean) {
    this.colapse.next(status);
  }

}
