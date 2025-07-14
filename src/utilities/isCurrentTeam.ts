import { currentTeams } from '../constants';
import { TeamTriCode } from '../types';

export const isCurrentTeam = (teamAbbreviation: TeamTriCode): boolean => {
  return currentTeams.includes(teamAbbreviation);
};
