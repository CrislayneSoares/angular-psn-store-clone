import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-cover',
  templateUrl: './page-cover.component.html',
  styleUrls: ['./page-cover.component.css']
})
export class PageCoverComponent implements OnInit {

  @Input() urlCover: string = ''
  @Input() urlCoverBackground: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
