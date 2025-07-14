import { describe, it, expect, vi } from 'vitest';
import { getCurrentRosterForTeam } from '../getCurrentRosterForTeam';
import { fetchJson } from '../../../http/fetchJson';
import { isTeamActive } from '../../../utilities/isTeamActive';
import { DEFAULT_BASE_URL_V1 } from '../../../constants';

vi.mock('../../../http/fetchJson');
vi.mock('../../../utilities/isTeamActive');

describe('getCurrentRosterForTeam', () => {
  const mockResponse = {
    defensemen: [],
    forwards: [],
    goalies: [],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('throws if the team is not active', () => {
    vi.mocked(isTeamActive).mockReturnValue(false);

    expect(() => getCurrentRosterForTeam({ teamCode: 'WHA' as any })).toThrow(
      'Team abbreviation provided is not a currently active team, so it does not have a current roster.'
    );
  });

  it('calls fetchJson with correct URL and returns data', async () => {
    vi.mocked(isTeamActive).mockReturnValue(true);
    vi.mocked(fetchJson).mockResolvedValue(mockResponse);

    const baseUrl = 'https://some.api';
    const teamCode = 'FLA';

    const result = await getCurrentRosterForTeam({ baseUrl, teamCode });
    expect(fetchJson).toHaveBeenCalledWith(
      `${baseUrl}/roster/${teamCode}/current`
    );
    expect(result).toBe(mockResponse);
  });

  it('uses DEFAULT_BASE_URL_V1 if no baseUrl is passed', async () => {
    vi.mocked(isTeamActive).mockReturnValue(true);
    vi.mocked(fetchJson).mockResolvedValue(mockResponse);

    const teamCode = 'FLA';

    const result = await getCurrentRosterForTeam({ teamCode });
    expect(fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/roster/${teamCode}/current`
    );
    expect(result).toBe(mockResponse);
  });
});
