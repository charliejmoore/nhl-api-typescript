import { CurrentStatLeader } from './shared';

/** Shape of data returned from `https://api-web.nhle.com/v1/goalie-stats-leaders/current`. */
export interface CurrentGoalieStatLeadersResponse {
  wins: CurrentStatLeader[];
  shutouts: CurrentStatLeader[];
  savePctg: CurrentStatLeader[];
  goalsAgainstAverage: CurrentStatLeader[];
}

/** Hockey statistics categories available for goalie leader ranking. */
export type GoalieStatLeaderCategory = keyof CurrentGoalieStatLeadersResponse;
