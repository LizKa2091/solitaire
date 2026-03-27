export type TSuit = '&spades;' | '&clubs;' | '&hearts;' | '&diams;';
export type TRank = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K' | 'A';

export interface ICard {
   id: string;
   suit: TSuit;
   rank: TRank;
}