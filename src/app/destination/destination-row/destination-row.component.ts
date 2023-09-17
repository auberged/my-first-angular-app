import { CommonModule } from '@angular/common';
import { Component, Inject, NgZone, ViewChild, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { DestinationsEntityService } from '../state/destination-entity.service';
import { Destination } from '../state/destination.model';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { take, tap } from 'rxjs';
import { compareAsc, isBefore, isDate, parse } from 'date-fns';
import { CustomvalidationService } from 'src/app/shared/customvalidation.service';
;

@Component({
  selector: 'app-destination-row',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatDialogModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, TextFieldModule],
  templateUrl: './destination-row.component.html',
  styleUrls: ['./destination-row.component.scss']
})
export class DestinationRowComponent{
  destination = new Destination();
  fb = inject(FormBuilder);
  dialogRef = inject(MatDialogRef<DestinationRowComponent>);
  destinationService = inject(DestinationsEntityService);
  @ViewChild('autosize') autosize?: CdkTextareaAutosize;
  _ngZone = inject(NgZone);
  customValidator = inject(CustomvalidationService);

  destinationForm = this.fb.group({
    id: this.destination.id,
    name: [this.destination.name, { validators: [Validators.required, Validators.minLength(3)] }],
    description: this.destination.description,
    fromDate: [this.destination.fromDate, {Validators: [this.customValidator.validateDateValidator.bind(this.customValidator)]}],
    toDate: [this.destination.toDate, {Validators: [this.customValidator.validateDateValidator()]}],
  });

  constructor( @Inject(MAT_DIALOG_DATA) public data: Destination ) {
    if(data != null)
      this.destinationForm.patchValue(data);
  }

  saveDestination(): void{
    this.destinationForm.updateValueAndValidity();
    this.destinationForm.controls['fromDate'].updateValueAndValidity();
    this.destinationForm.controls['toDate'].updateValueAndValidity();
    if(this.destinationForm.valid){
      (this.destinationForm.value.id == 0) ? this.destinationService.add(this.destinationForm.value as Destination) : this.destinationService.update(this.destinationForm.value as Destination);
      console.log('Getting raw value of id:', this.destinationForm.getRawValue().id);
      this.dialogRef.close();
    }    
  }

  closeDestination(): void{
    this.dialogRef.close();
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize?.resizeToFitContent(true));
  }
}
