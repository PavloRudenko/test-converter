import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ITOP1000-test-converter';

  toggle = true;

  cards: Card[] = [
    {
      title: 'Card # 1',
      text: 'lorem 1',
    },
    {
      title: 'Card # 2',
      text: 'lorem 2',
    },
    {
      title: 'Card # 3',
      text: 'lorem 3',
    },
  ];

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
