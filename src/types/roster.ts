import { Player } from './player';

export interface RosterResponse {
  /** List of defensemen on the roster. */
  defensemen: Player[];
  /** List of forwards on the roster. Includes center, left wing, and right wing. */
  forwards: Player[];
  /** List of goalies on the roster. */
  goalies: Player[];
}
