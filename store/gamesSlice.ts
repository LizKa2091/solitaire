import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGamesState } from "./types";

const initialState: IGamesState = {
   playedGames: {}
}

const gamesSlice = createSlice({
   name: 'games',
   initialState,
   reducers: {
      startGame: (state, action: PayloadAction<{ gameId: string }>) => {
         const { gameId } = action.payload;

         // TODO: response from server

         state.playedGames[gameId] = { gameId, userBestScore: null, status: 'ongoing' };
      },
      resetGame: (state, action: PayloadAction<{ id: string }>) => {
         const { id } = action.payload;
         const game = state.playedGames[id];

         if (game) {
            game.status = 'ongoing';
         }   
      },
      finishGame: (state, action: PayloadAction<{ id: string, userScore: number }>) => {
         const { id, userScore } = action.payload;
         const game = state.playedGames[id];

         if (game) {
            game.status = 'finished';

            if (game.userBestScore === null || game.userBestScore > userScore) {
               game.userBestScore = userScore;
            }
         }
      }
   }
})

export const { startGame, resetGame, finishGame } = gamesSlice.actions;
export default gamesSlice.reducer;