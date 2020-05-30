import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectBoxComponent } from './components/select-box/select-box.component';

@NgModule({
  declarations: [SelectBoxComponent],
  imports: [CommonModule],
  exports: [SelectBoxComponent],
})
export class SelectBoxModule {}
