import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getCurrentTeamStandings } from '../getCurrentTeamStandings';
import * as fetchJsonModule from '../../../http/fetchJson';
import { DEFAULT_BASE_URL_V1 } from '../../../constants';
import { CurrentTeamStandingsResponse } from '../../../types';

vi.mock('../../http/fetchJson');

describe('getCurrentTeamStandings', () => {
  const mockResponse: CurrentTeamStandingsResponse = {
    standings: [
      {
        clinchIndicator: 'p',
        conferenceAbbrev: 'W',
        conferenceHomeSequence: 2,
        conferenceL10Sequence: 6,
        conferenceName: 'Western',
        conferenceRoadSequence: 1,
        conferenceSequence: 1,
        date: '2025-04-17',
        divisionAbbrev: 'C',
        divisionHomeSequence: 1,
        divisionL10Sequence: 3,
        divisionName: 'Central',
        divisionRoadSequence: 1,
        divisionSequence: 1,
        gameTypeId: 2,
        gamesPlayed: 82,
        goalDifferential: 86,
        goalDifferentialPctg: 1.04878,
        goalAgainst: 191,
        goalFor: 277,
        goalsForPctg: 3.378049,
        homeGamesPlayed: 41,
        homeGoalDifferential: 58,
        homeGoalsAgainst: 81,
        homeGoalsFor: 139,
        homeLosses: 7,
        homeOtLosses: 4,
        homePoints: 64,
        homeRegulationPlusOtWins: 30,
        homeRegulationWins: 25,
        homeTies: 0,
        homeWins: 30,
        l10GamesPlayed: 10,
        l10GoalDifferential: 9,
        l10GoalsAgainst: 19,
        l10GoalsFor: 28,
        l10Losses: 3,
        l10OtLosses: 0,
        l10Points: 14,
        l10RegulationPlusOtWins: 6,
        l10RegulationWins: 5,
        l10Ties: 0,
        l10Wins: 7,
        leagueHomeSequence: 2,
        leagueL10Sequence: 9,
        leagueRoadSequence: 3,
        leagueSequence: 1,
        losses: 22,
        otLosses: 4,
        placeName: { default: 'Winnipeg' },
        pointPctg: 0.707317,
        points: 116,
        regulationPlusOtWinPctg: 0.658537,
        regulationPlusOtWins: 54,
        regulationWinPctg: 0.52439,
        regulationWins: 43,
        roadGamesPlayed: 41,
        roadGoalDifferential: 28,
        roadGoalsAgainst: 110,
        roadGoalsFor: 138,
        roadLosses: 15,
        roadOtLosses: 0,
        roadPoints: 52,
        roadRegulationPlusOtWins: 24,
        roadRegulationWins: 18,
        roadTies: 0,
        roadWins: 26,
        seasonId: 20242025,
        shootoutLosses: 1,
        shootoutWins: 2,
        streakCode: 'W',
        streakCount: 1,
        teamName: { default: 'Winnipeg Jets', fr: 'Jets de Winnipeg' },
        teamCommonName: { default: 'Jets' },
        teamAbbrev: { default: 'WPG' },
        teamLogo: 'https://assets.nhle.com/logos/nhl/svg/WPG_light.svg',
        ties: 0,
        waiversSequence: 32,
        wildcardSequence: 0,
        winPctg: 0.682927,
        wins: 56,
      },
      {
        clinchIndicator: 'z',
        conferenceAbbrev: 'E',
        conferenceHomeSequence: 3,
        conferenceL10Sequence: 12,
        conferenceName: 'Eastern',
        conferenceRoadSequence: 1,
        conferenceSequence: 1,
        date: '2025-04-17',
        divisionAbbrev: 'M',
        divisionHomeSequence: 2,
        divisionL10Sequence: 6,
        divisionName: 'Metropolitan',
        divisionRoadSequence: 1,
        divisionSequence: 1,
        gameTypeId: 2,
        gamesPlayed: 82,
        goalDifferential: 56,
        goalDifferentialPctg: 0.682927,
        goalAgainst: 232,
        goalFor: 288,
        goalsForPctg: 3.512195,
        homeGamesPlayed: 41,
        homeGoalDifferential: 34,
        homeGoalsAgainst: 119,
        homeGoalsFor: 153,
        homeLosses: 9,
        homeOtLosses: 6,
        homePoints: 58,
        homeRegulationPlusOtWins: 24,
        homeRegulationWins: 22,
        homeTies: 0,
        homeWins: 26,
        l10GamesPlayed: 10,
        l10GoalDifferential: -17,
        l10GoalsAgainst: 44,
        l10GoalsFor: 27,
        l10Losses: 6,
        l10OtLosses: 0,
        l10Points: 8,
        l10RegulationPlusOtWins: 3,
        l10RegulationWins: 3,
        l10Ties: 0,
        l10Wins: 4,
        leagueHomeSequence: 7,
        leagueL10Sequence: 24,
        leagueRoadSequence: 1,
        leagueSequence: 2,
        losses: 22,
        otLosses: 9,
        placeName: { default: 'Washington' },
        pointPctg: 0.676829,
        points: 111,
        regulationPlusOtWinPctg: 0.597561,
        regulationPlusOtWins: 49,
        regulationWinPctg: 0.52439,
        regulationWins: 43,
        roadGamesPlayed: 41,
        roadGoalDifferential: 22,
        roadGoalsAgainst: 113,
        roadGoalsFor: 135,
        roadLosses: 13,
        roadOtLosses: 3,
        roadPoints: 53,
        roadRegulationPlusOtWins: 25,
        roadRegulationWins: 21,
        roadTies: 0,
        roadWins: 25,
        seasonId: 20242025,
        shootoutLosses: 3,
        shootoutWins: 2,
        streakCode: 'L',
        streakCount: 1,
        teamName: {
          default: 'Washington Capitals',
          fr: 'Capitals de Washington',
        },
        teamCommonName: { default: 'Capitals' },
        teamAbbrev: { default: 'WSH' },
        teamLogo:
          'https://assets.nhle.com/logos/nhl/svg/WSH_secondary_light.svg',
        ties: 0,
        waiversSequence: 31,
        wildcardSequence: 0,
        winPctg: 0.621951,
        wins: 51,
      },
    ],
    wildCardIndicator: true,
    standingsDateTimeUtc: '2025-07-14T14:28:05Z',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(fetchJsonModule, 'fetchJson').mockResolvedValue(
      mockResponse as CurrentTeamStandingsResponse
    );
  });

  it('calls fetchJson with the correct URL using the default base URL', async () => {
    await getCurrentTeamStandings({});
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/standings/now`
    );
  });

  it('calls fetchJson with a custom baseUrl if provided', async () => {
    const baseUrl = 'https://custom.api/v1';
    await getCurrentTeamStandings({ baseUrl });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${baseUrl}/standings/now`
    );
  });

  it('returns the mock response', async () => {
    const result = await getCurrentTeamStandings({});
    expect(result).toBe(mockResponse);
  });
});
