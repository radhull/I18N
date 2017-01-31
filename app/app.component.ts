import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 i18n="User welcome|An introduction header for this sample">Hello</h1>
  <h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
