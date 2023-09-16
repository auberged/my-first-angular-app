import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../state/destination.model';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { tap } from 'rxjs';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.scss']
})
export class DestinationListComponent implements OnChanges {
  @Input() destination: Destination[] | null = [];

  displayedColumns = ['name', 'description', 'fromDate', 'toDate'];
  dataSource = new MatTableDataSource<Destination>([]);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['destination']) {
      this.dataSource = new MatTableDataSource(changes['destination'].currentValue);
    }
  }

}
