import { Ability } from "./ability";
import { Stat } from "./stat";

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  stats: Stat[];
  abilities: Ability[];
}
