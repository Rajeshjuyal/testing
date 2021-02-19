import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { SequenceComponent } from './sequence.component';

const routes: Routes = [
  {
    path: '',
    component: SequenceComponent,
    data: {
      title: 'sequence',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SequenceRoutingModule {}
