import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../shared/countries.service';
import { Country } from '../../shared/country.model';

@Component({
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
  country: Country;
  alphaCode: string;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {
    this.alphaCode = this.route.snapshot.paramMap.get('alpha');
  }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() {
    this.countriesService
      .getById(`alpha/${this.alphaCode}`)
      .subscribe((country) => (this.country = country));
  }
}
