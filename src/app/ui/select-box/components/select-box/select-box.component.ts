import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOption } from '../../shared/option.interface';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
})
export class SelectBoxComponent implements OnInit {
  @Input() dataSource: IOption[];
  @Input() placeholder: string;

  @Output() change = new EventEmitter<IOption>();

  selectedOption: string;
  showOptions = false;

  constructor() {}

  ngOnInit(): void {
    this.selectedOption = this.placeholder || '';
  }

  onClickSelectBox() {
    this.showOptions = !this.showOptions;
  }

  onClickOption(e) {
    const { target } = e;
    this.selectedOption = target.innerHTML;
    const key = target.getAttribute('data-key');
    this.change.emit({ key, value: this.selectedOption });
  }
}
