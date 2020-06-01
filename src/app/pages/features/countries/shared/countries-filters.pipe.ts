import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country.model';

@Pipe({
  name: 'countriesFilters',
})
export class CountriesFiltersPipe implements PipeTransform {
  transform(
    countries: Country[],
    args: { countryName?: string; countryRegion?: string }
  ): Country[] {
    const { countryName, countryRegion } = args;
    const filterName = countryName?.toLowerCase().trim();
    const filterRegion = countryRegion?.toLowerCase().trim();

    return countries?.filter(
      (country) =>
        country.name.toLowerCase().indexOf(filterName) > -1 &&
        country.region.toLowerCase().indexOf(filterRegion) > -1
    );
  }
}
