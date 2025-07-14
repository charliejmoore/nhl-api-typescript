import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DEFAULT_BASE_URL_V1 } from '../../../../constants';
import { getCurrentSkaterStatLeaders } from '../getSkaterStatLeaders';
import * as fetchJsonModule from '../../../../http/fetchJson';

vi.mock('../../../http/fetchJson');

describe('getCurrentSkaterStatLeaders', () => {
  const mockResponse = {
    goals: [],
    assists: [],
    points: [],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(fetchJsonModule, 'fetchJson').mockResolvedValue(
      mockResponse as any
    );
  });

  it('calls fetchJson with default URL and returns data', async () => {
    await getCurrentSkaterStatLeaders({});
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/skater-stats-leaders/current`
    );
  });

  it('uses custom baseUrl when provided', async () => {
    const baseUrl = 'https://example.com/api';
    await getCurrentSkaterStatLeaders({ baseUrl });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${baseUrl}/skater-stats-leaders/current`
    );
  });

  it('appends categories as query params', async () => {
    await getCurrentSkaterStatLeaders({
      categories: ['goals', 'assists'],
    });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/skater-stats-leaders/current?categories=goals,assists`
    );
  });

  it('appends limit as query param properly even if no categories', async () => {
    await getCurrentSkaterStatLeaders({
      limit: 5,
    });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/skater-stats-leaders/current?limit=5`
    );
  });

  it('appends categories and limit in correct order', async () => {
    await getCurrentSkaterStatLeaders({
      categories: ['goals', 'assists'],
      limit: 10,
    });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/skater-stats-leaders/current?categories=goals,assists&limit=10`
    );
  });

  it('returns the mock response', async () => {
    const data = await getCurrentSkaterStatLeaders({});
    expect(data).toBe(mockResponse);
  });
});
