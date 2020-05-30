import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
