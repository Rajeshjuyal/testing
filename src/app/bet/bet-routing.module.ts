import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BetComponent } from './bet.component';

const routes: Routes = [
  {
    path: '',
    component: BetComponent,
    data: {
      title: 'bet',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetRoutingModule {}
