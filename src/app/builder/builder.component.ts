import { FormioRefreshValue } from '@formio/angular';
import { Component, AfterViewInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent  {

  public form: Object;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor() {
    this.form = {components: []};
  }

  onChange(event) {
  
  }


}
