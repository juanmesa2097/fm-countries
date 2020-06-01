import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country.model';

@Pipe({
  name: 'countriesFilterByName',
})
export class CountriesFilterByNamePipe implements PipeTransform {
  transform(countries: Country[], countryName: string): Country[] {
    const filterText = countryName.toLowerCase().trim();
    return countries?.filter(
      (country) => country.name.toLowerCase().indexOf(filterText) > -1
    );
  }
}
