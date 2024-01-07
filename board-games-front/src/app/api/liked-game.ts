import { Games } from "./game";

export interface LikedGame {
    id?: number | null;
    idUsers?: number;
    idGames?: number;
    date?: Date;
    game: Games;
  }