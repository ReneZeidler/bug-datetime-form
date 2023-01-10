import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myDate = new FormControl('2023-01-01');

  constructor() {}

  setDate(value: string) {
    this.myDate.setValue(value);
  }
}
