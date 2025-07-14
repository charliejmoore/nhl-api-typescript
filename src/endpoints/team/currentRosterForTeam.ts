import { DEFAULT_BASE_URL_V1 } from '../../constants';
import { fetchJson } from '../../http/fetchJson';
import { CurrentRosterResponse } from '../../types/currentRoster';
import { TeamTriCode } from '../../types/team';
import { isCurrentTeam } from '../../utilities/isCurrentTeam';

export interface GetCurrentRosterForTeamConfig {
  baseUrl?: string;
  /** 3-letter team code (the triCode) (e.g., "FLA" for Florida Panthers). */
  teamCode: TeamTriCode;
}

export function getCurrentRosterForTeam(
  config: GetCurrentRosterForTeamConfig
): Promise<CurrentRosterResponse> {
  if (!isCurrentTeam(config.teamCode)) {
    throw Error(
      'Team abbreviation provided is not a currently active team, so it does not have a current roster.'
    );
  }

  const baseUrl = config?.baseUrl || DEFAULT_BASE_URL_V1;
  return fetchJson<CurrentRosterResponse>(
    `${baseUrl}/roster/${config.teamCode}/current`
  );
}
