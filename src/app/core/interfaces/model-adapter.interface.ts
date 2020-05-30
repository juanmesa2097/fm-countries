export interface IModelAdapter<T> {
  adapt(item: any): T;
  encode(item: T): any;
}
