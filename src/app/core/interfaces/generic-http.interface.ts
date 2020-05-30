import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IGenericHttp<T> {
  create(viewModel: T, extraEndpoint?: string[]): Observable<T>;
  update(id: number, viewModel: T, extraEndpoint?: string[]): Observable<T>;
  getAll(args?: {
    httpParams?: HttpParams;
    extraEndpoints?: string[];
  }): Observable<T[]>;
  getById(id: number, extraEndpoint?: string[]): Observable<T>;
  deleteById(id: number, extraEndpoint?: string[]);
}
