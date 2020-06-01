import { CountryCurrency } from './country-currency.model';
import { CountryLanguage } from './country-language.model';
import { CountryRegionalBloc } from './country-regional-bloc.model';
import { CountryTranslations } from './country-translations.model';

export class Country {
  constructor(
    public name: string,
    public topLevelDomain: string[],
    public alpha2Code: string,
    public alpha3Code: string,
    public callingCodes: string[],
    public capital: string,
    public altSpellings: string[],
    public region: string,
    public subregion: string,
    public population: number,
    public latlng: number[],
    public demonym: string,
    public area: number,
    public gini: number,
    public timezones: string[],
    public borders: string[],
    public nativeName: string,
    public numericCode: string,
    public currencies: CountryCurrency[],
    public languages: CountryLanguage[],
    public translations: CountryTranslations[],
    public flag: string,
    public regionalBlocs: CountryRegionalBloc[],
    public cioc: string
  ) {}
}
