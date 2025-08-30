import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { fetchJson } from '../../../http/fetchJson';
import { DEFAULT_BASE_URL_V1 } from '../../../constants';
import { getTeamRosterBySeason } from '../getTeamRosterBySeason';
import { RosterResponse, TeamTriCode } from '../../../types';
import { getMockPlayer } from '../../../mocks/getMockPlayer';

vi.mock('../../../http/fetchJson');

describe('getTeamRosterBySeason', () => {
  const mockResponse: RosterResponse = {
    defensemen: [getMockPlayer()],
    forwards: [],
    goalies: [],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls fetchJson with the correct URL using the default base URL', async () => {
    vi.mocked(fetchJson).mockResolvedValue(mockResponse);

    const result = await getTeamRosterBySeason({
      teamCode: 'FLA' as TeamTriCode,
      season: 20242025,
    });

    const expectedUrl = `${DEFAULT_BASE_URL_V1}/roster/FLA/20242025`;
    expect(fetchJson).toHaveBeenCalledTimes(1);
    expect(fetchJson).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual(mockResponse);
  });

  it('respects a custom baseUrl override', async () => {
    vi.mocked(fetchJson).mockResolvedValue(mockResponse);
    const customBase = 'http://localhost:4000/mock-api';
    const result = await getTeamRosterBySeason({
      baseUrl: customBase,
      teamCode: 'NYR' as TeamTriCode,
      season: 20232024,
    });

    const expectedUrl = `${customBase}/roster/NYR/20232024`;
    expect(fetchJson).toHaveBeenCalledTimes(1);
    expect(fetchJson).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual(mockResponse);
  });

  it('propagates errors from fetchJson', async () => {
    const err = new Error('network failure');
    (fetchJson as unknown as Mock).mockRejectedValueOnce(err);

    await expect(
      getTeamRosterBySeason({
        teamCode: 'FLA' as TeamTriCode,
        season: 20242025,
      })
    ).rejects.toThrow('network failure');

    const expectedUrl = `${DEFAULT_BASE_URL_V1}/roster/FLA/20242025`;
    expect(fetchJson).toHaveBeenCalledWith(expectedUrl);
  });
});
