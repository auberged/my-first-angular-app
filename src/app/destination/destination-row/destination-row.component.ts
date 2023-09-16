import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Destination } from '../state/destination.model';
import { MatButtonModule } from '@angular/material/button';
import { DestinationsEntityService } from '../state/destination-entity.service';
;

@Component({
  selector: 'app-destination-row',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatDialogModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './destination-row.component.html',
  styleUrls: ['./destination-row.component.scss']
})
export class DestinationRowComponent implements OnChanges {
  @Input() destination: Destination = new Destination();
  fb = inject(FormBuilder);
  dialogRef = inject(MatDialogRef<DestinationRowComponent>);
  destinationService = inject(DestinationsEntityService);

  destinationForm = this.fb.group({
    id: [0],
    name: [''],
    description: [''],
    fromDate: [''],
    toDate: [''],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['destination']){
      this.destinationForm.setValue(changes['destination'].currentValue);
    }
  }

  saveDestination(): void{
    (this.destinationForm.value.id == 0) ? this.destinationService.add(this.destinationForm.value as Destination) : this.destinationService.update(this.destinationForm.value as Destination);
    console.log('Getting raw value of id:', this.destinationForm.getRawValue().id);
    this.dialogRef.close();
  }

  closeDestination(): void{
    this.dialogRef.close();
  }
}
