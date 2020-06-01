import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGenericHttp, IModelAdapter } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export abstract class GenericHttpService<T> implements IGenericHttp<T> {
  protected headers: HttpHeaders;

  constructor(
    protected httpClient: HttpClient,
    @Inject(String) protected baseUrl: string,
    @Inject(String) protected endpoint: string,
    @Inject('IModelAdapter') protected modelAdapter: IModelAdapter<T>
  ) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }

  public create(viewModel: T, extras?: string): Observable<T> {
    const endpoint = this.endpoint && this.endpoint + '/';
    return this.httpClient
      .post<T>(
        `${this.baseUrl}/${endpoint}${extras}`,
        this.modelAdapter.encode(viewModel),
        { headers: this.headers }
      )
      .pipe(map((data) => this.modelAdapter.adapt(data)));
  }

  public update(id: string, viewModel: T, extras?: string): Observable<T> {
    const endpoint = this.endpoint && this.endpoint + '/';
    const extraEndpoints = extras ? '/' + extras : '';
    return this.httpClient
      .put<T>(
        `${this.baseUrl}/${endpoint}${extraEndpoints}/${id}`,
        this.modelAdapter.encode(viewModel),
        { headers: this.headers }
      )
      .pipe(map((data) => this.modelAdapter.adapt(data)));
  }

  public getAll(args?: {
    extras?: string;
    httpParams?: HttpParams;
  }): Observable<T[]> {
    const endpoint = this.endpoint && this.endpoint + '/';
    return this.httpClient
      .get<T[]>(`${this.baseUrl}/${endpoint}${args?.extras}`, {
        params: args?.httpParams,
      })
      .pipe(map((data) => this.convertData(data)));
  }

  public getById(id: string): Observable<T> {
    const endpoint = this.endpoint && this.endpoint + '/';
    return this.httpClient
      .get<T>(`${this.baseUrl}/${endpoint}${id}`)
      .pipe(map((data) => this.modelAdapter.adapt(data)));
  }

  public deleteById(id: string) {
    const endpoint = this.endpoint && this.endpoint + '/';
    return this.httpClient.delete(`${this.baseUrl}/${endpoint}${id}`);
  }

  protected convertData(data: any): T[] {
    return data?.map((item) => this.modelAdapter.adapt(item));
  }
}
