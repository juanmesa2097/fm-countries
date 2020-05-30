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

  public create(viewModel: T, extraEndpoints?: string[]): Observable<T> {
    return this.httpClient
      .post<T>(
        `${this.baseUrl}/${this.endpoint}/${extraEndpoints?.join('/') || ''}`,
        this.modelAdapter.encode(viewModel),
        { headers: this.headers }
      )
      .pipe(map((data) => this.modelAdapter.adapt(data)));
  }

  public update(
    id: number,
    viewModel: T,
    extraEndpoints?: string[]
  ): Observable<T> {
    return this.httpClient
      .put<T>(
        `${this.baseUrl}/${this.endpoint}/${
          extraEndpoints?.join('/') || ''
        }/${id}`,
        this.modelAdapter.encode(viewModel),
        { headers: this.headers }
      )
      .pipe(map((data) => this.modelAdapter.adapt(data)));
  }

  public getAll(args?: {
    httpParams?: HttpParams;
    extraEndpoints?: string[];
  }): Observable<T[]> {
    return this.httpClient
      .get<T[]>(
        `${this.baseUrl}/${this.endpoint}/${
          args?.extraEndpoints?.join('/') || ''
        }`,
        { params: args?.httpParams }
      )
      .pipe(map((data) => this.convertData(data)));
  }

  public getById(id: number, extraEndpoints?: string[]): Observable<T> {
    return this.httpClient
      .get<T>(
        `${this.baseUrl}/${this.endpoint}/${id}/${
          extraEndpoints?.join('/') || ''
        }`
      )
      .pipe(map((data) => this.modelAdapter.adapt(data)));
  }

  public deleteById(id: number, extraEndpoints?: string[]) {
    return this.httpClient.delete(
      `${this.baseUrl}/${this.endpoint}/${
        extraEndpoints?.join('/') || ''
      }/${id}`
    );
  }

  protected convertData(data: any): T[] {
    return data?.map((item) => this.modelAdapter.adapt(item));
  }
}
