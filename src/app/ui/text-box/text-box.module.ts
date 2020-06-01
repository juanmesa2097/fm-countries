import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextBoxComponent } from './components/text-box/text-box.component';

@NgModule({
  declarations: [TextBoxComponent],
  imports: [CommonModule, FormsModule],
  exports: [TextBoxComponent],
})
export class TextBoxModule {}
