import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appValidate]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidateDirective,
    multi: true
  }]
})
export class ValidateDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl) {
    if (control.value === '') {
      return { required: false };
    }
  }
}
