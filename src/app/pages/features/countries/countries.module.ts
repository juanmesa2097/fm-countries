import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesPage } from './pages/countries/countries.page';
import { CountryCardComponent } from './components/country-card/country-card.component';

@NgModule({
  declarations: [CountriesPage, CountryCardComponent],
  imports: [CommonModule, CountriesRoutingModule],
})
export class CountriesModule {}
