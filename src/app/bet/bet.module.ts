import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetRoutingModule } from './bet-routing.module';
import { BetComponent } from './bet.component';



@NgModule({
  declarations: [BetComponent],
  imports: [
    CommonModule,BetRoutingModule
  ]
})
export class BetModule { }
