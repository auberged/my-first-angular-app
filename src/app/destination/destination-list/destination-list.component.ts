import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { Destination } from '../state/destination.model';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { DestinationRowComponent } from '../destination-row/destination-row.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, AsyncPipe, NgIf, MatIconModule, MatButtonModule, MatMenuModule, MatDialogModule],
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
  displayedColumns = ['actions', 'name', 'fromDate', 'toDate'];
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement = new Destination();
  editDialog = inject(MatDialog);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['destination']) {
      this.dataSource = new MatTableDataSource(changes['destination'].currentValue);
    }
  }

  openActions(event: MouseEvent):void{
    event.stopPropagation();
  }

  editDestination(destination: Destination): void{
    this.editDialog.open(DestinationRowComponent, { 
      width: '90vw', 
      data: destination,
    });
  }

  deleteDestination(destination: Destination): void{
    
  }

}