import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-header></app-header>
    </header>
    <main>
      <app-home></app-home>
    </main>
    <footer>
      <app-footer></app-footer>
    </footer>
  `,
  styles: [`
    header{
      top:0;
      position:sticky;
    }
    main{
      padding:2rem;
      min-height:80vh;
      background-color:#E0D98C;
    }
    footer{
    border:3px black solid;
    }
  `]
})
export class AppComponent {
  title = 'eshare';
}
