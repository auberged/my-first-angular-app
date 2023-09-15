import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from '../shared/intro/intro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IntroComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
