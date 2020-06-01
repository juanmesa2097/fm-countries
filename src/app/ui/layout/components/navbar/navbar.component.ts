import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  @Output() changeTheme = new EventEmitter<string>();
  themeText = 'Dark Mode';
  themeIcon = 'brightness_4';

  constructor() {}

  ngOnInit(): void {}

  onChangeTheme(e) {
    const { target } = e;
    const theme = target.checked ? 'dark' : 'light';

    if (theme === 'light') {
      this.themeText = 'Dark Mode';
      this.themeIcon = 'brightness_4';
    } else {
      this.themeText = 'Light Mode';
      this.themeIcon = 'wb_sunny';
    }

    this.changeTheme.emit(theme);
  }
}
