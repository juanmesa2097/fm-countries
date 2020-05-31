import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CountriesService } from '../../shared/countries.service';
import { Country } from '../../shared/country.model';

@Component({
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {
  countries: Country[];
  constructor(private countriesService: CountriesService) {}

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
}
