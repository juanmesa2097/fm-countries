export class CountryRegionalBloc {
  constructor(
    public acronym: string,
    public name: string,
    public otherAcronyms: string[],
    public otherNames: string[]
  ) {}
}
