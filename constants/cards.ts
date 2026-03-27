import { TRank, TSuit } from './../types/cardTypes';
import { ICard } from "@/types/cardTypes";

const suits: TSuit[] = ['♣', '♦', '♥', '♠'];
const ranks: TRank[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

export const cards: ICard[] = [];

for (const suit of suits) {
   for (const rank of ranks) {
      const id = `${rank}-${suit}`;

      cards.push({ id, rank, suit })
   }
}