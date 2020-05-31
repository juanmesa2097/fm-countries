import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesPage } from './pages/countries/countries.page';

@NgModule({
  declarations: [CountriesPage],
  imports: [CommonModule, CountriesRoutingModule],
})
export class CountriesModule {}
