import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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
  imports: [CommonModule , MatIconModule,  MatDialogModule, MatToolbarModule, MatSlideToggleModule, ReactiveFormsModule, DestinationListComponent, MatButtonModule, AsyncPipe],
  templateUrl: './destination-container.component.html',
  styleUrls: ['./destination-container.component.scss']
})
export class DestinationContainerComponent implements OnInit {
  showPastDestinations = new FormControl(false);
  destinationService = inject(DestinationsEntityService);
  destinations = this.destinationService.entities$;
  addDialog = inject(MatDialog);
  
  ngOnInit(): void {
    this.destinationService.loaded$.subscribe((loaded) => {
      if (!loaded) {
        this.destinationService.getAll();
      }
    })
  }

  openAddModal(): void {
    this.addDialog.open(DestinationRowComponent, { width: '90vw' });
  }

  deleteItem(item: Destination): void {
    this.destinationService.delete(item);
  }
}
