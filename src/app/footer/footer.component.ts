import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
    main{
      display:flex;
      flex-wrap:wrap;
      background-color:#FDEEDC;
    }
    div{
      margin:0 auto;
      margin-bottom:2rem;
      padding:0.5rem;
      min-width:300px;
    }
    span{
      width:100%;
    }
    a{
      text-decoration:none;
      color:royalblue;
    }
    a:hover{
      zoom:110%;
      color:crimson;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
