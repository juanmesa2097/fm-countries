import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TextBoxComponent implements OnInit {
  @Input() value: string;
  @Input() placeholder: string;
  @Input() icon: string;

  @Output() valueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChange(e) {
    this.valueChange.emit(e);
  }
}
