import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material';

import { FormComponent } from './form/form.component';
import { BaseRoutingModule } from './base.module.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateDirective } from './validate.directive';


@NgModule({
  declarations: [FormComponent, ValidateDirective],
  imports: [
    CommonModule,
    BaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatInputModule
  ]
})
export class BaseModule { }
