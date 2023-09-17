import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-button',
  templateUrl: './title-button.component.html',
  styleUrls: ['./title-button.component.css']
})
export class TitleButtonComponent implements OnInit {

  @Input() title: string = ''
  @Input() textButton: string = ''
  @Input() description: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
