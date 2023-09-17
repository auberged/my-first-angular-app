import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { compareAsc, isDate, parse } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  validateDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const date = parse(control.value, 'dd.mm.yyyy', new Date());

    if (isDate(date)) {
      return { dateError: true };
    }
    return null as any;
    };
  }

  validateDateRangeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        console.log("Test");
        console.log(control.get('fromDate')?.value);
        console.log(control.get('toDate')?.value);
        const fromDate = parse(control.get('fromDate')?.value, 'dd.mm.yyyy', new Date());
        const toDate = parse(control.get('toDate')?.value, 'dd.mm.yyyy', new Date());
        if(control.get('fromDate')?.value == '' && control.get('toDate')?.value == '')
          return null as any;
    
        return ((compareAsc(fromDate, toDate) > -1) ? null : { dateRangeMismatch: true }) as any;
    };
  }
}