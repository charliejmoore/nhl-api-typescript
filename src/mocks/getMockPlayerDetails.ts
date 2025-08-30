// test-utils/mocks.ts
import {
  DraftDetails,
  PlayerStatLine,
  SubSeasonStats,
  SeasonStatSummary,
  FeaturedStats,
  LastGameStat,
  SeasonTotal,
  TeamRosterPlayer,
  CareerTotals,
  PlayerDetailsResponse,
  LocalizedString,
  HockeyPositionCode,
  Shoots,
  TeamTriCode,
  GameType,
  HomeRoadFlag,
} from '../types';

/** Helper to make a LocalizedString quickly */
export function makeLocalizedString(value = 'Example'): LocalizedString {
  return { default: value };
}

export function makeDraftDetails(
  overrides: Partial<DraftDetails> = {}
): DraftDetails {
  return {
    year: 2020,
    teamAbbrev: 'DET' as TeamTriCode,
    round: 1,
    pickInRound: 10,
    overallPick: 10,
    ...overrides,
  };
}

export function makePlayerStatLine(
  overrides: Partial<PlayerStatLine> = {}
): PlayerStatLine {
  return {
    assists: 5,
    goals: 10,
    gamesPlayed: 20,
    points: 15,
    pim: 2,
    plusMinus: 1,
    shots: 30,
    ...overrides,
  };
}

export function makeSubSeasonStats(
  overrides: Partial<SubSeasonStats> = {}
): SubSeasonStats {
  return {
    assists: 20,
    goals: 15,
    gamesPlayed: 40,
    points: 35,
    pim: 10,
    plusMinus: 5,
    shots: 100,
    powerPlayGoals: 5,
    powerPlayPoints: 8,
    shorthandedGoals: 1,
    shorthandedPoints: 2,
    shootingPctg: 12.5,
    otGoals: 1,
    gameWinningGoals: 2,
    ...overrides,
  };
}

export function makeSeasonStatSummary(
  overrides: Partial<SeasonStatSummary> = {}
): SeasonStatSummary {
  return {
    subSeason: makeSubSeasonStats(),
    career: makeSubSeasonStats(),
    ...overrides,
  };
}

export function makeFeaturedStats(
  overrides: Partial<FeaturedStats> = {}
): FeaturedStats {
  return {
    season: 20242025,
    regularSeason: makeSeasonStatSummary(),
    ...overrides,
  };
}

export function makeLastGameStat(
  overrides: Partial<LastGameStat> = {}
): LastGameStat {
  return {
    assists: 1,
    gameDate: '2024-01-01',
    gameId: 12345,
    gameTypeId: GameType.REGULAR_SEASON,
    goals: 2,
    homeRoadFlag: 'H' as HomeRoadFlag,
    opponentAbbrev: 'CHI' as TeamTriCode,
    pim: 0,
    plusMinus: 1,
    points: 3,
    powerPlayGoals: 1,
    shifts: 20,
    shorthandedGoals: 0,
    shots: 5,
    teamAbbrev: 'DET' as TeamTriCode,
    toi: '20:15',
    ...overrides,
  };
}

export function makeSeasonTotal(
  overrides: Partial<SeasonTotal> = {}
): SeasonTotal {
  return makePlayerStatLine(overrides);
}

export function makeTeamRosterPlayer(
  overrides: Partial<TeamRosterPlayer> = {}
): TeamRosterPlayer {
  return {
    playerId: 1,
    lastName: makeLocalizedString('Doe'),
    firstName: makeLocalizedString('John'),
    playerSlug: 'john-doe-1',
    ...overrides,
  };
}

export function makeCareerTotals(
  overrides: Partial<CareerTotals> = {}
): CareerTotals {
  return {
    regularSeason: makePlayerStatLine(),
    playoffs: makePlayerStatLine(),
    ...overrides,
  };
}

export function getMockPlayerDetails(
  overrides: Partial<PlayerDetailsResponse> = {}
): PlayerDetailsResponse {
  return {
    playerId: 123,
    isActive: true,
    currentTeamId: 17,
    currentTeamAbbrev: 'DET' as TeamTriCode,
    fullTeamName: makeLocalizedString('Detroit Red Wings'),
    teamCommonName: makeLocalizedString('Red Wings'),
    teamPlaceNameWithPreposition: makeLocalizedString('Detroit'),
    firstName: makeLocalizedString('John'),
    lastName: makeLocalizedString('Doe'),
    badges: [],
    teamLogo: 'https://example.com/logo.svg',
    sweaterNumber: 25,
    position: 'D' as HockeyPositionCode,
    headshot: 'https://example.com/headshot.jpg',
    heroImage: 'https://example.com/hero.jpg',
    heightInInches: 72,
    heightInCentimeters: 183,
    weightInPounds: 200,
    weightInKilograms: 91,
    birthDate: '1990-01-01',
    birthCity: makeLocalizedString('Toronto'),
    birthStateProvince: makeLocalizedString('Ontario'),
    birthCountry: 'CAN',
    shootsCatches: 'L' as Shoots,
    draftDetails: makeDraftDetails(),
    playerSlug: 'john-doe-8470001',
    inTop100AllTime: 0,
    inHHOF: 0,
    featuredStats: makeFeaturedStats(),
    careerTotals: makeCareerTotals(),
    shopLink: 'https://shop.nhl.com',
    twitterLink: 'https://twitter.com/johndoe',
    watchLink: 'https://nhl.com/watch/johndoe',
    last5Games: [makeLastGameStat()],
    seasonTotals: [makeSeasonTotal()],
    currentTeamRoster: [makeTeamRosterPlayer()],
    ...overrides,
  };
}
