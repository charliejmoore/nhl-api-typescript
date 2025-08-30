import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getPlayerDetails } from '../getPlayerDetails';
import * as fetchJsonModule from '../../../http/fetchJson';
import { DEFAULT_BASE_URL_V1 } from '../../../constants';
import { PlayerDetailsResponse } from '../../../types';
import { getMockPlayerDetails } from '../../../mocks';

vi.mock('../../http/fetchJson');

describe('getPlayerDetails', () => {
  const mockResponse: PlayerDetailsResponse = getMockPlayerDetails();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(fetchJsonModule, 'fetchJson').mockResolvedValue(
      mockResponse as PlayerDetailsResponse
    );
  });

  it('calls fetchJson with the correct URL using default baseUrl', async () => {
    const playerId = 8478402;
    await getPlayerDetails({ playerId });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/player/${playerId}/landing`
    );
  });

  it('calls fetchJson with the correct URL using custom baseUrl', async () => {
    const baseUrl = 'https://custom.api/v1';
    const playerId = 1234;
    await getPlayerDetails({ baseUrl, playerId });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${baseUrl}/player/${playerId}/landing`
    );
  });

  it('returns the mock response', async () => {
    const playerId = 1111;
    const result = await getPlayerDetails({ playerId });
    expect(result).toBe(mockResponse);
  });
});
