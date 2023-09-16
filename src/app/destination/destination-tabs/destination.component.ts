import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { DestinationContainerComponent } from '../destination-container/destination-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [CommonModule, MatTabsModule, DestinationContainerComponent],
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {

}
