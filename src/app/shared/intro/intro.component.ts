import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule],
})
export class IntroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() img: string = '';
}
