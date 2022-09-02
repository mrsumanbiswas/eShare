import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  .mat-toolbar{
    background-color:#0004;
    display:flex;
    flex:wrap;
  }
  .spacer {
    flex: 1 1 auto;
  }
  #app{
    margin:auto;
    width:100%;
  }
`]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
