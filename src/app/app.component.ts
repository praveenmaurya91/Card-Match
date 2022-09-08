/**
 * Author: Praveen Kumar
 * Created: 08/09/2022
 */

import { Component } from '@angular/core';
import * as moment from 'moment';
import { Card, CardState } from 'src/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'card-match';

  cards: Card[] = [
    {
      id: 1,
      img: '../assets/images/2_of_clubs.png',
      name: '2_of_clubs',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 2,
      img: '../assets/images/2_of_diamonds.png',
      name: '2_of_diamond',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 3,
      img: '../assets/images/2_of_hearts.png',
      name: '2_of_hearts',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 4,
      img: '../assets/images/2_of_spades.png',
      name: '2_of_spades',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 5,
      img: '../assets/images/3_of_clubs.png',
      name: '3_of_clubs',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 6,
      img: '../assets/images/3_of_diamonds.png',
      name: '3_of_diamonds',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 7,
      img: '../assets/images/3_of_hearts.png',
      name: '3_of_hearts',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 8,
      img: '../assets/images/3_of_spades.png',
      name: '3_of_spades',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 9,
      img: '../assets/images/4_of_clubs.png',
      name: '4_of_clubs',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 10,
      img: '../assets/images/4_of_diamonds.png',
      name: '4_of_diamonds',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 11,
      img: '../assets/images/4_of_hearts.png',
      name: '4_of_hearts',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 12,
      img: '../assets/images/4_of_spades.png',
      name: '4_of_spades',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 13,
      img: '../assets/images/5_of_clubs.png',
      name: '2_of_clubs',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 14,
      img: '../assets/images/5_of_diamonds.png',
      name: '5_of_diamonds',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 15,
      img: '../assets/images/5_of_hearts.png',
      name: '5_of_hearts',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 16,
      img: '../assets/images/5_of_spades.png',
      name: '5_of_spades',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 17,
      img: '../assets/images/6_of_clubs.png',
      name: '6_of_clubs',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 18,
      img: '../assets/images/6_of_diamonds.png',
      name: '6_of_diamonds',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 19,
      img: '../assets/images/2_of_clubs.png',
      name: '2_of_clubs',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 20,
      img: '../assets/images/2_of_diamonds.png',
      name: '2_of_diamond',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 21,
      img: '../assets/images/2_of_hearts.png',
      name: '2_of_hearts',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 22,
      img: '../assets/images/2_of_spades.png',
      name: '2_of_spades',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 23,
      img: '../assets/images/3_of_clubs.png',
      name: '3_of_clubs',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 24,
      img: '../assets/images/3_of_diamonds.png',
      name: '3_of_diamonds',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 25,
      img: '../assets/images/3_of_hearts.png',
      name: '3_of_hearts',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 26,
      img: '../assets/images/3_of_spades.png',
      name: '3_of_spades',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 27,
      img: '../assets/images/4_of_clubs.png',
      name: '4_of_clubs',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 28,
      img: '../assets/images/4_of_diamonds.png',
      name: '4_of_diamonds',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 29,
      img: '../assets/images/4_of_hearts.png',
      name: '4_of_hearts',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 30,
      img: '../assets/images/4_of_spades.png',
      name: '4_of_spades',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 31,
      img: '../assets/images/5_of_clubs.png',
      name: '2_of_clubs',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 32,
      img: '../assets/images/5_of_diamonds.png',
      name: '5_of_diamonds',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 33,
      img: '../assets/images/5_of_hearts.png',
      name: '5_of_hearts',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 34,
      img: '../assets/images/5_of_spades.png',
      name: '5_of_spades',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 35,
      img: '../assets/images/6_of_clubs.png',
      name: '6_of_clubs',
      back: '../assets/images/back.png',
      open: false,
    },
    {
      id: 36,
      img: '../assets/images/6_of_diamonds.png',
      name: '6_of_diamonds',
      back: '../assets/images/back.png',
      open: false,
    },
  ];

  countdown!: string;
  timer = moment(0);
  gameStarted = false;
  gameFinished = false;
  cardState: CardState[] = [];
  time: any;

  /** This function will start the game */
  startGame() {
    this.timer = moment(0);
    this.gameStarted = true;
    this.gameFinished = false;
    this.cards.map((x) => (x.open = false));
    this.time = setInterval(() => {
      this.timer.add(1000, 'milliseconds');
      this.countdown = moment(this.timer).format('mm:ss');
    }, 1000);
  }

  /** This function will open the card and check if there is a match */
  openCard(card: Card, index: number) {
    card.open = true;
    let data: CardState = {
      index: index,
      card: card,
    };
    this.cardState.push(data);
    if (this.cardState.length === 2) {
      if (this.cardState[0].card.name === this.cardState[1].card.name) {
        this.cardState = [];
        const finish = this.cards.every((x) => x.open === true);
        if (finish) {
          this.gameFinished = true;
          clearInterval(this.time);
        }
      } else {
        this.timer.add(5000, 'milliseconds');
        setTimeout(() => {
          this.cards[this.cardState[0].index].open = false;
          this.cards[this.cardState[1].index].open = false;
          this.cardState = [];
        }, 200);
      }
    }
  }
}
