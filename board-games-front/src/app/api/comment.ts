import { User } from "./user";

export interface Comment {
  id?: number | null;
  idUsers: number;
  user?: User;
  comment?: string;
  idGames?: number;
}

