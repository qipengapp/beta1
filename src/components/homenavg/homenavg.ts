import { Component } from '@angular/core';

/**
 * Generated class for the HomenavgComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'homenavg',
  templateUrl: 'homenavg.html',
  inputs: ['name']
})
export class HomenavgComponent {

  text: string;
  name: string;
  // type: string;

  constructor() {
    console.log('Hello HomenavgComponent Component');
    this.text = 'Hello World';
    // this.name = "colin";
  }

}
