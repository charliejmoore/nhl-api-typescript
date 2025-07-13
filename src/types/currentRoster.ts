import { Player } from './player';

export interface CurrentRosterResponse {
  /** List of defensemen on the current roster. */
  defensemen: Player[];
  /** List of forwards on the current roster. Includes center, left wing, and right wing. */
  forwards: Player[];
  /** List of goalies on the current roster. */
  goalies: Player[];
}
