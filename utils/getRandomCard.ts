import { cards } from "@/constants/cards";
import { ICard } from "@/types/cardTypes";

export const getRandomCard = (): ICard => {
   const randomIndex = Math.floor(Math.random() * cards.length);

   return cards[randomIndex];
}