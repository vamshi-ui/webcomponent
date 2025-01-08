import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-custom-element',
  templateUrl: './my-custom-element.component.html',
  styleUrls: ['./my-custom-element.component.scss']
})
export class MyCustomElementComponent implements OnInit {
  message: string = 'This is a Web Component made with Angular!';

  constructor() { }

  ngOnInit(): void {
  }

}
