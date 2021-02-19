import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SequenceRoutingModule } from './sequence-routing.module';
import { SequenceComponent } from './sequence.component';

@NgModule({
  declarations: [SequenceComponent],
  imports: [CommonModule, SequenceRoutingModule],
})
export class SequenceModule {}
