import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageResponsesRoutingModule } from './page-responses-routing.module';
import { NotFoundPage } from './pages/not-found/not-found.page';

@NgModule({
  declarations: [NotFoundPage],
  imports: [CommonModule, PageResponsesRoutingModule],
})
export class PageResponsesModule {}
