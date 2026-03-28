export type TGameStatus = 'ongoing' | 'finished';

export interface IGameData {
   gameId: string;
   userBestScore: number | null;
   status: TGameStatus;
}

export interface IGamesState {
   playedGames: Record<string, IGameData>;
}