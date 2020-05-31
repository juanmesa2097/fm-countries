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
  filter = 'hola';

  constructor(private countriesService: CountriesService) {
    this.regions = [
      { key: 1, value: 'Africa' },
      { key: 2, value: 'America' },
      { key: 3, value: 'Asia' },
      { key: 4, value: 'Europe' },
      { key: 5, value: 'Oceania' },
    ];
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countriesService
      .getAll()
      .pipe(first())
      .subscribe((countries) => {
        this.countries = countries;
        console.log(countries);
      });
  }

  onChangeRegion(e) {}
}
