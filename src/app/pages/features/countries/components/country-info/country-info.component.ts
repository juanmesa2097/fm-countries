import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
