import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdf-new-form-builder';
  public form: Object;
  constructor() {
    this.form = {components: []};
  }
  onChange(event) {
   
  }

}
