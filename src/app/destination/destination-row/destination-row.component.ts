import { CommonModule } from '@angular/common';
import { Component, Inject, NgZone, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { take } from 'rxjs';
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

  destinationForm = this.fb.group({
    id: this.destination.id,
    name: this.destination.name,
    description: this.destination.description,
    fromDate: this.destination.fromDate,
    toDate: this.destination.toDate,
  });

  constructor( @Inject(MAT_DIALOG_DATA) public data: Destination ) {
    if(data != null)
      this.destinationForm.patchValue(data);
  }

  saveDestination(): void{
    (this.destinationForm.value.id == 0) ? this.destinationService.add(this.destinationForm.value as Destination) : this.destinationService.update(this.destinationForm.value as Destination);
    console.log('Getting raw value of id:', this.destinationForm.getRawValue().id);
    this.dialogRef.close();
  }

  closeDestination(): void{
    this.dialogRef.close();
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize?.resizeToFitContent(true));
  }
}
