import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }/* ,
  {
    path: 'destinations',
    loadChildren: () =>
    import('./destinations/destination.module').then((m) => m.DestinationModule),
  }, */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
