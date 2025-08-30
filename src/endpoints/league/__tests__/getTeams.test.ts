import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getAllNHLTeams } from '../getTeams';
import * as fetchJsonModule from '../../../http/fetchJson';
import { DEFAULT_BASE_URL_STATS } from '../../../constants';
import { TeamListResponse } from '../../../types';

vi.mock('../../http/fetchJson');

describe('getAllNHLTeams', () => {
  const mockResponse: TeamListResponse = {
    data: [],
    total: 32,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(fetchJsonModule, 'fetchJson').mockResolvedValue(
      mockResponse as TeamListResponse
    );
  });

  it('calls fetchJson with default baseUrl and language when no config is provided', async () => {
    await getAllNHLTeams();
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_STATS}/en/team`
    );
  });

  it('uses custom baseUrl if provided', async () => {
    const baseUrl = 'https://custom.api/nhl';
    await getAllNHLTeams({ baseUrl });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${baseUrl}/en/team`
    );
  });

  it('uses custom language if provided', async () => {
    const language = 'fr';
    await getAllNHLTeams({ language });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_STATS}/${language}/team`
    );
  });

  it('uses both custom baseUrl and language if provided', async () => {
    const baseUrl = 'https://custom.api/nhl';
    const language = 'fi';
    await getAllNHLTeams({ baseUrl, language });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${baseUrl}/${language}/team`
    );
  });

  it('returns the mock response', async () => {
    const result = await getAllNHLTeams();
    expect(result).toBe(mockResponse);
  });
});
