import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IGenericHttp<T> {
  create(viewModel: T, extras?: string): Observable<T>;
  update(id: string, viewModel: T, extras?: string): Observable<T>;
  getAll(extras?: string, httpParams?: HttpParams): Observable<T[]>;
  getById(id: string): Observable<T>;
  deleteById(id: string);
}
