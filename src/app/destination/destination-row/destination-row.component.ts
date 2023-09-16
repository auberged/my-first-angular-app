import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Destination } from '../state/destination.model';
import { MatButtonModule } from '@angular/material/button';
;

@Component({
  selector: 'app-destination-row',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatDialogModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './destination-row.component.html',
  styleUrls: ['./destination-row.component.scss']
})
export class DestinationRowComponent {
  @Input() destination: Destination = new Destination();
  fb = inject(FormBuilder);
  dialogRef = inject(MatDialogRef<DestinationRowComponent>);

  destinationForm = this.fb.group({
    id: [0],
    name: [''],
    description: [''],
    fromDate: [''],
    toDate: [''],
  });

  saveDestination(): void{

  }

  closeDestination(): void{
    this.dialogRef.close();
  }
}
