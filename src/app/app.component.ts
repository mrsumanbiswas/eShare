import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-header></app-header>
    </header>
    <app-home></app-home>
    <app-footer></app-footer>
  `,
  styles: [`
    header{
      top:0;
      position:sticky;
    }
  `]
})
export class AppComponent {
  title = 'eshare';
}
