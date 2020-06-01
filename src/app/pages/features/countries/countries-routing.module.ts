import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesPage } from './pages/countries/countries.page';
import { CountryPage } from './pages/country/country.page';

const routes: Routes = [
  { path: '', component: CountriesPage },
  { path: ':alpha', component: CountryPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
