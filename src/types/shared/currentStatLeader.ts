import { TeamTriCode } from '../team';
import { HockeyPositionCode } from './hockeyPositionCode';
import { LocalizedString } from './localizedString';

/** Individual player in the stat leader results. */
export interface CurrentStatLeader {
  /** Unique identifier. */
  id: number;
  /** The player's first name. */
  firstName: LocalizedString;
  /** The player's last name. */
  lastName: LocalizedString;
  /** Player's sweater (jersey) number. */
  sweaterNumber: number;
  /** URL to NHL image png asset. */
  headshot: string;
  /** The abbreviation for the player's team (e.g., "BOS"). */
  teamAbbrev: TeamTriCode;
  /** E.g., "Rangers", "Golden Knights". */
  teamName: LocalizedString;
  /** URL to NHL logo svg asset. */
  teamLogo: string;
  /** The player's position. */
  position: HockeyPositionCode;
  /** Value of the statistic. For faceoffLeaders this is a percentage; penaltyMins time in minutes; toi time on ice in minutes. */
  value: number;
}
