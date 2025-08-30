import { CurrentStatLeader } from './shared';

/** Shape of data returned from `https://api-web.nhle.com/v1/goalie-stats-leaders/current`. */
export interface CurrentGoalieStatLeadersResponse {
  /** List of current leaders in number of wins. */
  wins: CurrentStatLeader[];
  /** List of current leaders in number of shutouts. */
  shutouts: CurrentStatLeader[];
  /** List of current leaders in save percentage. */
  savePctg: CurrentStatLeader[];
  /** List of current leaders in number of goals against average. */
  goalsAgainstAverage: CurrentStatLeader[];
}

/** Hockey statistics categories available for goalie leader ranking. */
export type GoalieStatLeaderCategory = keyof CurrentGoalieStatLeadersResponse;
