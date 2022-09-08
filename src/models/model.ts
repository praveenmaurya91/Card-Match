export interface Card {
  id: number;
  img: string;
  name: string;
  back: string;
  open: boolean;
}

export interface CardState {
  index: number;
  card: Card;
}
