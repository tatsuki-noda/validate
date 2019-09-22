import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {
  }

  tmp: string;
  tmp1: FormGroup;

  ngOnInit() {
    this.tmp1 = new FormGroup({
      tmp: new FormControl()
    });
  }
}
