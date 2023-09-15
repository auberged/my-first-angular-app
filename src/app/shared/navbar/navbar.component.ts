import { Component, inject } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';
import { NavbarService } from './navbar.service';
import { RouterLink, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SideNavFacade } from 'src/app/state/sidenav.facade';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true, 
  imports: [ CommonModule, RouterLink, MatToolbarModule, MatIconModule, RouterModule], 
  providers: [ SideNavFacade, SnackbarService, NavbarService, MatSnackBar ]
})
export class NavbarComponent {
  nav = inject(SideNavFacade);
  ms = inject(NavbarService);
  sns = inject(SnackbarService);
  menuItems = this.ms.getTopItems();

  toggleMenu() {
    this.nav.toggleMenuVisibility();
  }

  toggleApps() {
    this.sns.displayAlert('Apps', 'Not implemented - just a mock');
  }
}
