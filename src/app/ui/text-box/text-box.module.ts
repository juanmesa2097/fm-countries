import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './components/text-box/text-box.component';



@NgModule({
  declarations: [TextBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [TextBoxComponent]
})
export class TextBoxModule { }
