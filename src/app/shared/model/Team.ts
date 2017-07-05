import {Player} from "./Player";

export interface Team {
  name: string;
  budget: number;
  players: Player[];
}
