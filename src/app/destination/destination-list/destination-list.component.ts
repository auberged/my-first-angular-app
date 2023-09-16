import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { Destination } from '../state/destination.model';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, AsyncPipe, NgIf, MatIconModule, MatButtonModule],
  templateUrl: './destination-list.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls: ['./destination-list.component.scss']
})
export class DestinationListComponent implements OnChanges {
  @Input() destination: Destination[] | null = [];

  dataSource = new MatTableDataSource<Destination>([]);
  displayedColumns = ['name', 'fromDate', 'toDate'];
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement = new Destination();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['destination']) {
      this.dataSource = new MatTableDataSource(changes['destination'].currentValue);
    }
  }

}