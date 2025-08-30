import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DEFAULT_BASE_URL_V1 } from '../../../../constants';
import { getCurrentGoalieStatLeaders } from '../getGoalieStatLeaders';
import * as fetchJsonModule from '../../../../http/fetchJson';
import { CurrentGoalieStatLeadersResponse } from '../../../../types';

vi.mock('../../../http/fetchJson');

describe('getCurrentGoalieStatLeaders', () => {
  const mockResponse: CurrentGoalieStatLeadersResponse = {
    wins: [],
    shutouts: [],
    savePctg: [],
    goalsAgainstAverage: [],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(fetchJsonModule, 'fetchJson').mockResolvedValue(
      mockResponse as CurrentGoalieStatLeadersResponse
    );
  });

  it('calls fetchJson with default URL and returns data', async () => {
    await getCurrentGoalieStatLeaders({});
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/goalie-stats-leaders/current`
    );
  });

  it('uses custom baseUrl when provided', async () => {
    const baseUrl = 'https://example.com/api';
    await getCurrentGoalieStatLeaders({ baseUrl });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${baseUrl}/goalie-stats-leaders/current`
    );
  });

  it('appends categories as query params', async () => {
    await getCurrentGoalieStatLeaders({
      categories: ['wins', 'shutouts'],
    });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/goalie-stats-leaders/current?categories=wins,shutouts`
    );
  });

  it('appends limit as query param properly even if no categories', async () => {
    await getCurrentGoalieStatLeaders({
      limit: 5,
    });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/goalie-stats-leaders/current?limit=5`
    );
  });

  it('appends categories and limit in correct order', async () => {
    await getCurrentGoalieStatLeaders({
      categories: ['shutouts', 'goalsAgainstAverage'],
      limit: 10,
    });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/goalie-stats-leaders/current?categories=shutouts,goalsAgainstAverage&limit=10`
    );
  });

  it('returns the mock response', async () => {
    const data = await getCurrentGoalieStatLeaders({});
    expect(data).toBe(mockResponse);
  });
});
