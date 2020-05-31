import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectBoxModule } from 'src/app/ui/select-box/select-box.module';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesPage } from './pages/countries/countries.page';

@NgModule({
  declarations: [CountriesPage, CountryCardComponent],
  imports: [CommonModule, CountriesRoutingModule, SelectBoxModule],
})
export class CountriesModule {}
