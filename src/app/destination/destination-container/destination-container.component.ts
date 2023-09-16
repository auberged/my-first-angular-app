import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DestinationListComponent } from '../destination-list/destination-list.component';
import { DestinationsEntityService } from '../state/destination-entity.service';
import { Destination } from '../state/destination.model';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DestinationRowComponent } from '../destination-row/destination-row.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-destination-container',
  standalone: true,
  imports: [CommonModule , MatIconModule,  MatDialogModule, MatToolbarModule, MatSlideToggleModule, ReactiveFormsModule, DestinationListComponent, MatButtonModule],
  templateUrl: './destination-container.component.html',
  styleUrls: ['./destination-container.component.scss']
})
export class DestinationContainerComponent {
  showPastDestinations = new FormControl(false);
  destinationService = inject(DestinationsEntityService);
  destinations = this.destinationService.getAll();
  addDialog = inject(MatDialog);

  openAddModal(): void {
    this.addDialog.open(DestinationRowComponent, { width: '90vw' });
  }

  deleteItem(item: Destination): void {
    this.destinationService.delete(item);
  }
}
