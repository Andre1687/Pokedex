import { Stat } from "./stat";

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  stats: Stat[];
}
