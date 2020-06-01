import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countriesFilterByRegion'
})
export class CountriesFilterByRegionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
