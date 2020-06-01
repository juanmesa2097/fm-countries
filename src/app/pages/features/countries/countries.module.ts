import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingSpinnerModule } from '@app/ui/loading-spinner/loading-spinner.module';
import { SelectBoxModule } from 'src/app/ui/select-box/select-box.module';
import { TextBoxModule } from 'src/app/ui/text-box/text-box.module';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesPage } from './pages/countries/countries.page';
import { CountryPage } from './pages/country/country.page';
import { CountriesFilterByNamePipe } from './shared/countries-filter-by-name.pipe';
import { CountriesFilterByRegionPipe } from './shared/countries-filter-by-region.pipe';

@NgModule({
  declarations: [
    CountriesPage,
    CountryCardComponent,
    CountryPage,
    CountryInfoComponent,
    CountriesFilterByNamePipe,
    CountriesFilterByRegionPipe,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    TextBoxModule,
    SelectBoxModule,
    LoadingSpinnerModule,
  ],
})
export class CountriesModule {}
