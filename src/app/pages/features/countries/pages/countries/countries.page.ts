import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { IOption } from 'src/app/ui/select-box/shared/option.interface';
import { CountriesService } from '../../shared/countries.service';
import { Country } from '../../shared/country.model';

@Component({
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {
  countries: Country[];
  regions: IOption[];
  countryName = '';
  countryRegion = '';
  isLoading: boolean;

  constructor(private countriesService: CountriesService) {
    this.regions = [
      { key: '', value: 'All' },
      { key: 'africa', value: 'Africa' },
      { key: 'america', value: 'America' },
      { key: 'asia', value: 'Asia' },
      { key: 'europe', value: 'Europe' },
      { key: 'oceania', value: 'Oceania' },
    ];
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.isLoading = true;
    this.countriesService
      .getAll({ extras: 'all' })
      .pipe(first())
      .subscribe((countries) => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

  trackByCountry(index, item: Country) {
    return item.alpha2Code;
  }

  onChangeRegion(e) {
    this.countryRegion = e.key;
  }
}
