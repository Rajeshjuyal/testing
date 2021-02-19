import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TransferComponent } from './transfer.component';
const routes: Routes = [
  {
    path: '',
    component: TransferComponent,
    data: {
      title: 'transfer',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferRoutingModule {}
