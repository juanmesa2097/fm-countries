import { IModelAdapter } from 'src/app/core/interfaces';
import { Country } from './country.model';

export class CountryAdapter implements IModelAdapter<Country> {
  adapt(item: any): Country {
    return new Country(
      item.name,
      item.topLevelDomain,
      item.alpha2Code,
      item.alpha3Code,
      item.callingCodes,
      item.capital,
      item.altSpellings,
      item.region,
      item.subregion,
      item.population,
      item.latlng,
      item.demonym,
      item.area,
      item.gini,
      item.timezones,
      item.borders,
      item.nativeName,
      item.numericCode,
      item.currencies,
      item.languages,
      item.translations,
      item.flag,
      item.regionalBlocs,
      item.cioc
    );
  }
  encode(item: Country) {
    return {
      name: item.name,
      topLevelDomain: item.topLevelDomain,
      alpha2Code: item.alpha2Code,
      alpha3Code: item.alpha3Code,
      callingCodes: item.callingCodes,
      capital: item.capital,
      altSpellings: item.altSpellings,
      region: item.region,
      subregion: item.subregion,
      population: item.population,
      latlng: item.latlng,
      demonym: item.demonym,
      area: item.area,
      gini: item.gini,
      timezones: item.timezones,
      borders: item.borders,
      nativeName: item.nativeName,
      numericCode: item.numericCode,
      currencies: item.currencies,
      languages: item.languages,
      translations: item.translations,
      flag: item.flag,
      regionalBlocs: item.regionalBlocs,
      cioc: item.cioc,
    };
  }
}
