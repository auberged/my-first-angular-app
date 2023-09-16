import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DestinationsEntityService } from '../state/destination-entity.service';
import { Destination } from '../state/destination.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DestinationRowComponent } from '../destination-row/destination-row.component';

@Component({
  selector: 'app-destination-container',
  standalone: true,
  imports: [CommonModule , MatToolbarModule, MatSlideToggleModule, ReactiveFormsModule, DestinationRowComponent],
  templateUrl: './destination-container.component.html',
  styleUrls: ['./destination-container.component.scss']
})
export class DestinationContainerComponent {
  showPastDestinations = new FormControl(false);
  destinationService = inject(DestinationsEntityService);
  destinations = this.destinationService.getAll();

  openAddModal(): void {
    
  }

  deleteItem(item: Destination): void {
    this.destinationService.delete(item);
  }
}
