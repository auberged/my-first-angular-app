import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../state/destination.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-destination-row',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './destination-row.component.html',
  styleUrls: ['./destination-row.component.scss']
})
export class DestinationRowComponent {
  @Input() destination: Destination = new Destination();
  @Output() itemDeleted: EventEmitter<Destination> = new EventEmitter();

  deleteItem(item: Destination): void {
    this.itemDeleted.emit(item);
  }
}
