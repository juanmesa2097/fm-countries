import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Country } from '../../shared/country.model';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCardComponent implements OnInit {
  @Input() country: Country;

  constructor() {}

  ngOnInit(): void {}
}
