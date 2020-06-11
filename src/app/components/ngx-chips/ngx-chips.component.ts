import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface AutoCompleteModel {
  value: any;
  display: string;
}

@Component({
  selector: 'app-ngx-chips',
  templateUrl: './ngx-chips.component.html',
  styleUrls: ['./ngx-chips.component.css']
})
export class NgxChipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public validators = [ this.must_be_email ];
  public errorMessages = {
      'must_be_email': 'Please be sure to use a valid email format'
  };
  private must_be_email(control: FormControl) {        
      var EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
      if (control.value.length != "" && !EMAIL_REGEXP.test(control.value)) {
          return { "must_be_email": true };
      }
      return null;
  }

}
