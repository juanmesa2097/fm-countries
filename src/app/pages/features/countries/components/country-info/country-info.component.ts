import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CountryCurrency } from '../../shared/country-currency.model';
import { CountryLanguage } from '../../shared/country-language.model';
import { Country } from '../../shared/country.model';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInfoComponent implements OnInit {
  @Input() country: Country;

  constructor() {}

  ngOnInit(): void {}

  displayCurrencies(currencies: CountryCurrency[]) {
    return currencies.map((c) => c.name).join(', ');
  }

  displayLanguages(languages: CountryLanguage[]) {
    return languages.map((c) => c.name).join(', ');
  }
}
