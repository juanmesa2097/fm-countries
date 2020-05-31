import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericHttpService } from 'src/app/core/services';
import { environment } from 'src/environments/environment';
import { CountryAdapter } from './country.adapter';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService extends GenericHttpService<Country> {
  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apiUrl, 'all', new CountryAdapter());
  }
}
